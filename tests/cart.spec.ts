import { test } from "@playwright/test";
import {
  getAllProductsByCategory,
  Product,
  ProductCategory,
  UserType,
} from "@data_providers/products";
import { ProductDetailsPage, ProductsPage, CartPage } from "@pages";
import {
  acceptCookies,
  blockAds,
  navigateToPage,
  verifyBreadCrumbNav,
} from "@pages/base_page/base_page";
import { verifyAddToCartToast, viewCartButtonInToast } from "@pages/toast_page/toast_page";
import { getRandomObjectProperty } from "helpers/helper_functions";

test.describe("Cart and checkout tests", () => {
  const randomJeansProduct: Product = getRandomObjectProperty(
    getAllProductsByCategory(ProductCategory.Jeans),
  );

  const {
    name: randomJeansProductName,
    price: randomJeansProductPrice,
    brand: randomJeansProductBrand,
  } = randomJeansProduct;

  test.beforeEach(async ({ page }) => {
    await navigateToPage(page, "homepage");
    await acceptCookies(page);
    await blockAds(page);
  });

  test("Verify user can add products to cart", async ({ page }) => {
    await test.step("Navigate to products page", async () => {
      await navigateToPage(page, "cart");
      await CartPage.clearCart(page);
    });

    await test.step("Verify breadcrumb navigation", async () => {
      await verifyBreadCrumbNav(page, {
        homePage: "Shopping Cart",
      });
    });

    await test.step("Verify user's cart is empty", async () => {
      await CartPage.verifyEmptyCartMessage(page);
    });

    await test.step("Click on empty cart navigate to products button", async () => {
      await CartPage.clickEmptyCartNavigateToProductsButton(page);
    });

    await test.step("Verify user is on products page", async () => {
      await ProductsPage.verifyUserIsOnCorrectProductsPage(page);
    });

    await test.step("Navigate to Men category Jeans products page", async () => {
      await ProductsPage.navigateThroughProductsPages(page, UserType.Men, ProductCategory.Jeans);
    });

    await test.step("Pick a random Jeans product", async () => {
      await ProductsPage.clickViewProductButton(page, randomJeansProductName);
    });

    await test.step("Add product to cart", async () => {
      await ProductDetailsPage.clickAddToCart(page);
    });

    await test.step("Verify successfully added to cart modal is displayed", async () => {
      await verifyAddToCartToast(page);
    });

    await test.step("Click on view cart button", async () => {
      await viewCartButtonInToast(page);
    });

    await test.step("Verify user is on cart page", async () => {
      await CartPage.verifyUserIsOnCartPage(page);
    });
  });
});
