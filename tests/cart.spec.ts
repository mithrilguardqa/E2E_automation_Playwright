import { test } from "@playwright/test";
import {
  getAllProductsByCategory,
  Product,
  ProductCategory,
  UserType,
  products,
  getRandomProduct,
} from "@data_providers/products";
import { ProductDetailsPage, ProductsPage, CartPage } from "@pages";
import {
  acceptCookies,
  blockAds,
  navigateToPage,
  verifyBreadCrumbNav,
} from "@pages/base_page/base_page";
import {
  clickContinueShoppingButtonInToast,
  verifyAddToCartToast,
  viewCartButtonInToast,
} from "@pages/toast_page/toast_page";
import { addProductToCart } from "@pages/homepage/homepage";
import { users } from "@data_providers/user_details";

const productsToAddToCart: Product[] = getAllProductsByCategory(ProductCategory.TopsAndShirts);
const { name: product1Name, price: price1 } = productsToAddToCart[0];
const { name: product2Name, price: price2 } = productsToAddToCart[1];
const product1Price = String(`Rs. ${price1}`);
const product2Price = String(`Rs. ${price2}`);
const productsQuantity: string = "1";

test.describe("Verify user can add products to cart", () => {
  test.use({ storageState: users.cartUser1.authFile });

  const randomJeansProduct: Product = getRandomProduct(
    products[UserType.Men][ProductCategory.Jeans],
  );

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
      await ProductsPage.clickViewProductButton(page, randomJeansProduct.name);
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

test.describe("Verify user can remove products from the cart", () => {
  test.use({ storageState: users.cartUser2.authFile });

  test.beforeEach(async ({ page }) => {
    await navigateToPage(page, "homepage");
    await acceptCookies(page);
    await blockAds(page);
  });

  test("Verify user can remove products from the cart", async ({ page }) => {
    await test.step("Verify user is in home page", async () => {
      await navigateToPage(page, "homepage");
    });

    await test.step("Add product to cart", async () => {
      for (const product of productsToAddToCart) {
        await addProductToCart(page, product.name);
        await clickContinueShoppingButtonInToast(page);
      }
    });

    await test.step("Navigate to cart page", async () => {
      await navigateToPage(page, "cart");
    });

    await test.step("Verify cart has the correct products", async () => {
      await CartPage.verifyCartHasTheCorrectProducts(
        page,
        productsToAddToCart.map((product) => product.name),
      );
    });

    await test.step("Remove products from cart to clear the it", async () => {
      await CartPage.clearCart(page);
    });

    await test.step("Verify cart is empty", async () => {
      await CartPage.checkIsCartEmpty(page);
    });
  });
});

test.describe("Review order details in checkout page", () => {
  test.use({ storageState: users.cartUser3.authFile });

  const cartUser3 = users.cartUser3.details;

  test.beforeEach(async ({ page }) => {
    await navigateToPage(page, "homepage");
    await acceptCookies(page);
    await blockAds(page);
  });

  test("Review order details in checkout page", async ({ page }) => {
    await test.step("Navigate to cart page and ensure it's empty", async () => {
      await navigateToPage(page, "cart");
      await CartPage.clearCart(page);
      await CartPage.verifyEmptyCartMessage(page);
    });

    await test.step("Navigate to products page", async () => {
      await navigateToPage(page, "homepage");
    });

    await test.step("Add 2 products to cart", async () => {
      await addProductToCart(page, product1Name);
      await clickContinueShoppingButtonInToast(page);
      await addProductToCart(page, product2Name);
      await clickContinueShoppingButtonInToast(page);
    });

    await test.step("Navigate to cart page", async () => {
      await navigateToPage(page, "cart");
      await verifyBreadCrumbNav(page, { homePage: "Shopping Cart" });
    });

    await test.step("Verify cart has the correct products", async () => {
      await CartPage.verifyCartHasTheCorrectProducts(page, [product1Name, product2Name]);
    });

    await test.step("Click on proceed to checkout button", async () => {
      await CartPage.clickProceedToCheckoutButton(page);
      await verifyBreadCrumbNav(page, { homePage: "Checkout" });
    });

    await test.step("Verify delivery and billing addresses are correct", async () => {
      await CartPage.verifyDeliveryAddressDetails(
        page,
        cartUser3.first_name,
        cartUser3.last_name,
        cartUser3.company,
        cartUser3.address1,
        cartUser3.address2,
        cartUser3.country,
        cartUser3.state,
        cartUser3.city,
        cartUser3.zipcode,
        cartUser3.phone,
      );
    });

    await test.step("Verify billing address details are correct", async () => {
      await CartPage.verifyBillingAddressDetails(
        page,
        cartUser3.first_name,
        cartUser3.last_name,
        cartUser3.company,
        cartUser3.address1,
        cartUser3.address2,
        cartUser3.country,
        cartUser3.state,
        cartUser3.city,
        cartUser3.zipcode,
        cartUser3.phone,
      );
    });

    await test.step("Verify order details are correct - name, price, quantity and total price", async () => {
      await CartPage.verifyOrderDetails(
        page,
        product1Name,
        product1Price,
        productsQuantity,
        product2Name,
        product2Price,
        productsQuantity,
      );
    });

    await test.step("Verify order total price is correct", async () => {
      const orderTotalPrice = price1 + price2;
      await CartPage.verifyOrderTotalPrice(page, String(`Rs. ${orderTotalPrice}`));
    });
  });
});
