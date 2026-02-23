#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const https = require("https");
const FormData = require("form-data");

// Load environment variables
require("dotenv").config();

const BROWSERSTACK_USERNAME = process.env.BROWSERSTACK_USERNAME;
const BROWSERSTACK_ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY;

if (!BROWSERSTACK_USERNAME || !BROWSERSTACK_ACCESS_KEY) {
  console.error(
    "Error: BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY must be set in environment variables",
  );
  process.exit(1);
}

async function uploadResults() {
  const resultsPath = path.join(__dirname, "results.xml");

  if (!fs.existsSync(resultsPath)) {
    console.error("Error: results.xml file not found. Please run tests first.");
    process.exit(1);
  }

  // Read the results.xml file
  const resultsContent = fs.readFileSync(resultsPath);

  // Parse build name from environment or use default
  const buildName = process.env.BUILD_NAME || `Playwright Build ${new Date().toISOString()}`;
  const projectName = process.env.PROJECT_NAME || "Demo Project";

  console.log(`Uploading results to BrowserStack...`);
  console.log(`Project: ${projectName}`);
  console.log(`Build: ${buildName}`);

  const form = new FormData();
  form.append("data", resultsContent, {
    filename: "results.xml",
    contentType: "application/xml",
  });
  form.append("projectName", projectName);
  form.append("buildName", buildName);

  return new Promise((resolve, reject) => {
    const auth = Buffer.from(`${BROWSERSTACK_USERNAME}:${BROWSERSTACK_ACCESS_KEY}`).toString(
      "base64",
    );

    const options = {
      hostname: "upload-automation.browserstack.com",
      path: "/upload",
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        ...form.getHeaders(),
      },
    };

    const req = https.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        if (res.statusCode === 200) {
          try {
            const response = JSON.parse(data);
            console.log("✅ Upload successful!");
            console.log("Response:", response);

            if (response.build_url) {
              console.log(`🔗 View results at: ${response.build_url}`);
            }

            resolve(response);
          } catch (error) {
            console.log("✅ Upload successful!");
            console.log("Raw response:", data);
            resolve(data);
          }
        } else {
          console.error(`❌ Upload failed with status ${res.statusCode}`);
          console.error("Response:", data);
          reject(new Error(`Upload failed: ${res.statusCode} - ${data}`));
        }
      });
    });

    req.on("error", (error) => {
      console.error("❌ Upload error:", error);
      reject(error);
    });

    form.pipe(req);
  });
}

// Run the upload
uploadResults()
  .then(() => {
    console.log("🎉 Process completed successfully!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("💥 Process failed:", error.message);
    process.exit(1);
  });
