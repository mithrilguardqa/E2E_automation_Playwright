import { Browser, chromium, Page } from "@playwright/test";
import config from "@env";

async function globalSetup() {
  if (process.env.SKIP_GLOBAL_SETUP === "true") return;

  const browser: Browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page: Page = await context.newPage();

  await page.goto(config.baseUrl);
  
  await browser.close();
}

export default globalSetup;
