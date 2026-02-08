import { PlaywrightTestConfig } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

// Config that extends PlaywrightTestConfig to hold extra properties
interface TestConfig extends PlaywrightTestConfig {
  baseUrl: string;
  apiURL: string;
}

// AutomationExercise only has one environment (public practice site)
const defaultConfig: TestConfig = {
  baseUrl: "https://automationexercise.com",
  apiURL: "https://automationexercise.com",
};

// get the environment type from command line. If none, set it to default
const environment = process.env.TEST_ENV || "default";

// config object with default configuration and environment specific configuration
let config: TestConfig;

switch (environment) {
  case "default":
    config = defaultConfig;
    break;
  default:
    config = defaultConfig;
    break;
}

export default config;
