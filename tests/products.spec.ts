import { test } from "@playwright/test";
import { acceptCookies, navigateToPage } from "@pages/base_page/base_page";
import { Homepage } from "@pages";
import { ProductsPage } from "@pages";

test.describe("Products browsing", () => {
  test.beforeEach(async ({ page }) => {
    await navigateToPage(page, "homepage");
    await acceptCookies(page);
  });

  test("Verify user can browse products by brand", async ({ page }) => {
    let totalItemsCount = 0;
    await test.step("Navigate to products page", async () => {
      await navigateToPage(page, "products");
    });

    await test.step("Verify user is on products page", async () => {
      await ProductsPage.userIsOnProductsPage(page);
    });
  });
});
