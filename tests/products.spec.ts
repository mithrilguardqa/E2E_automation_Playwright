import { test } from "@playwright/test";
import { ProductCategory, products, UserType } from "@data_providers/products";
import { acceptCookies, navigateToPage } from "@pages/base_page/base_page";
import { LoginPage, ProductsPage } from "@pages";
import config from "@env";
import { defaultUserDetails } from "@data_providers/user_details";

test.describe("Products browsing", () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test.beforeEach(async ({ page }) => {
    await navigateToPage(page, "homepage");
    await acceptCookies(page);
    await LoginPage.loginUser(page, defaultUserDetails.email, config.password);
  });

  test("Verify user can browse products", async ({ page }) => {
    const womenDressCount: number = products[UserType.Women][ProductCategory.Dress].length;
    const menTshirtsCount: number = products[UserType.Men][ProductCategory.Tshirts].length;

    await test.step("Navigate to products page", async () => {
      await navigateToPage(page, "products");
    });

    await test.step("Verify user is on products page", async () => {
      await ProductsPage.verifyUserIsOnCorrectProductsPage(page);
    });

    await test.step("Navigate user women dress category and browse products", async () => {
      await ProductsPage.navigateThroughProductsPages(page, UserType.Women, ProductCategory.Dress);
    });

    await test.step("Verify correct number and names of products are displayed", async () => {
      await ProductsPage.verifyUserIsOnCorrectProductsPage(
        page,
        UserType.Women,
        ProductCategory.Dress,
      );
    });

    await test.step("Verify breadcrumb navigation", async () => {
      const breadcrumbText: string = `Products Women > Dress`;
      await ProductsPage.verifyBreadCrumbNav(page, breadcrumbText);
    });

    await test.step("Verify correct number of products are displayed", async () => {
      await ProductsPage.verifyProductsCount(page, womenDressCount);
    });
  });
});
