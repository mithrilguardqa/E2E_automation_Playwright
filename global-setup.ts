import { Browser, chromium, Page } from "@playwright/test";
import config from "@env";
import { baseElements } from "@pages/base_page/base.elements";
import { LoginPage } from "@pages";
import { users, UserAuth } from "@data_providers/user_details";
import fs from "fs";

const AUTH_MAX_AGE_MS = 24 * 60 * 60 * 1000; // 24 hours
const MAX_RETRIES = 3;

function isAuthFileValid(authFile: string): boolean {
  if (!fs.existsSync(authFile)) return false;

  const stats = fs.statSync(authFile);
  const ageMs = Date.now() - stats.mtimeMs;
  return ageMs < AUTH_MAX_AGE_MS;
}

async function loginAndSaveAuth(browser: Browser, email: string, authFile: string): Promise<void> {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    const context = await browser.newContext();
    const page: Page = await context.newPage();

    try {
      await page.goto(config.baseUrl, { waitUntil: "networkidle" });

      try {
        const banner = page.locator(baseElements.consentBanner);
        await banner.waitFor({ state: "visible", timeout: 5000 });
        await banner.click();
        await banner.waitFor({ state: "hidden", timeout: 3000 });
      } catch {
        // Consent banner did not appear
      }

      await LoginPage.clickOnSignupLoginButtonNavBar(page);
      await LoginPage.fillLoginEmail(page, email);
      await LoginPage.fillLoginPassword(page, config.password);
      await LoginPage.clickLoginSubmit(page);

      await page.context().storageState({ path: authFile });
      return;
    } catch (error) {
      if (attempt === MAX_RETRIES) throw error;
    } finally {
      await context.close();
    }
  }
}

async function globalSetup() {
  if (process.env.SKIP_GLOBAL_SETUP === "true") return;

  const usersToLogin: UserAuth[] = Object.values(users).filter(
    (user) => !isAuthFileValid(user.authFile),
  );

  if (usersToLogin.length === 0) return;

  const browser: Browser = await chromium.launch({ headless: true });

  for (const user of usersToLogin) {
    await loginAndSaveAuth(browser, user.email, user.authFile);
  }

  await browser.close();
}

export default globalSetup;
