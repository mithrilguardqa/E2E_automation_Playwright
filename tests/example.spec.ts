import { test } from "@playwright/test";
import { navigateToHomepage } from "@pages/base_page/base_page";
import { Homepage } from "@pages";

test.describe("Homepage tests", () => {
  test.beforeEach(async ({ page }) => {
    await navigateToHomepage(page);
  });

  test("Verify homepage is visible", async ({ page }) => {
    await Homepage.verifyHomepageIsVisible(page);
  });

  // test("Verify login is successful", async ({ page }) => {
  //   const loggedInAsUsername = await Homepage.verifyLoginIsSuccessful(page);
  //   console.log(loggedInAsUsername);
  // });
});
