import { Browser, chromium, Page } from "@playwright/test";
import config from "@env";
import { baseElements } from "@pages/base_page/base.elements";
import { LoginPage } from "@pages";

async function globalSetup() {
  if (process.env.SKIP_GLOBAL_SETUP === "true") return;

  const browser: Browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page: Page = await context.newPage();

  await page.goto(config.baseUrl);

  if (await page.locator(baseElements.consentBanner).isVisible()) {
    await page.locator(baseElements.consentBanner).click();
  }
  await LoginPage.clickOnSignupLoginButtonNavBar(page);
  await LoginPage.fillLoginEmail(page, config.email);
  await LoginPage.fillLoginPassword(page, config.password);
  await LoginPage.clickLoginSubmit(page);
  await page.context().storageState({ path: ".auth/login.json" });
  await browser.close();
}

export default globalSetup;
