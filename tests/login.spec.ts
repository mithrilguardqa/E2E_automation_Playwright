import { test } from "@playwright/test";
import { navigateToHomepage } from "@pages/base_page/base_page";
import { Homepage, LoginPage } from "@pages";
import config from "@env";

test.describe("Login and registration tests", () => {
  test.beforeEach(async ({ page }) => {
    await navigateToHomepage(page);
  });

  test("Verify use can login successfully", async ({ page }) => {
    // await LoginPage.clickOnSignupLoginButtonNavBar(page);
    // await LoginPage.fillLoginEmail(page, email);
    // await LoginPage.fillLoginPassword(page, config.password);
    // await LoginPage.clickLoginSubmit(page);
    
    await Homepage.verifyUserIsLoggedIn(page);
  });
});
