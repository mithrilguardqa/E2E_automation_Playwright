import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";
import config from "@env";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

export default defineConfig({
  globalSetup: require.resolve("./global-setup"),
  testDir: "./tests",
  globalTimeout: 300000,
  expect: {
    timeout: 10000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["list"], ["junit", { outputFile: "results.xml" }], ["html", { open: "never" }]],
  use: {
    baseURL: config.baseUrl,
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
