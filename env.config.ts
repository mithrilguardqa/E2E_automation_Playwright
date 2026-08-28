import { PlaywrightTestConfig } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

interface TestConfig extends PlaywrightTestConfig {
  baseUrl: string;
  email: string;
  password: string;
}

const devConfig: TestConfig = {
  baseUrl: "https://automationexercise.com/",
  email: process.env.EMAIL || "",
  password: process.env.PASSWORD || "",
};

const prodConfig: TestConfig = {
  baseUrl: "https://prod.automationexercise.com/",
  email: process.env.EMAIL || "",
  password: process.env.PASSWORD || "",
};

// get the environment type from command line. If none, set it to default
const environment = process.env.TEST_ENV || "dev";

let config: TestConfig;

switch (environment) {
  case "dev":
    config = devConfig;
    break;
  case "prod":
    config = prodConfig;
    break;
  default:
    config = devConfig;
    break;
}

export default config;
