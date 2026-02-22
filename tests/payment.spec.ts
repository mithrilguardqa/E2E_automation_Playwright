import { expect, test } from "@playwright/test";
import { CartPage, Homepage, PaymentPage, ProductsPage } from "@pages";
import {
  acceptCookies,
  blockAds,
  navigateToPage,
  verifyBreadCrumbNav,
} from "@pages/base_page/base_page";
import { ProductCategory, products, UserType } from "@data_providers/products";
import { clearCart } from "@pages/cart_page/cart_page";
import { clickContinueShoppingButtonInToast } from "@pages/toast_page/toast_page";
import { defaultUserDetails, UserDetails } from "@data_providers/user_details";
import fs from "fs";
import path from "path";

const INVOICE_PATH = path.resolve("downloads/invoice.txt");

test.describe("Payment", () => {
  test.beforeEach(async ({ page }) => {
    if (fs.existsSync(INVOICE_PATH)) {
      fs.unlinkSync(INVOICE_PATH);
    }

    await navigateToPage(page, "homepage");
    await acceptCookies(page);
    await blockAds(page);
  });

  test("Check payment flow", async ({ page }) => {
    const defaultUser: UserDetails = defaultUserDetails;

    const { name: jeansProductOneName, price: jeansProductOnePrice } =
      products[UserType.Men][ProductCategory.Jeans][0];
    const { name: jeansProductTwoName, price: jeansProductTwoPrice } =
      products[UserType.Men][ProductCategory.Jeans][1];

    const product1Price = String(`Rs. ${jeansProductOnePrice}`);
    const product2Price = String(`Rs. ${jeansProductTwoPrice}`);
    let orderTotalPrice: number;
    const productsQuantity: string = "1";

    const cardHolderName = `${defaultUser.first_name} ${defaultUser.last_name}`;
    const cardNumber = "4242424242424242";
    const cvv = "123";
    const expirationMonth = "11";
    const expirationYear = "2028";

    await test.step("Navigate to products page", async () => {
      await navigateToPage(page, "cart");
      await clearCart(page);
    });

    await test.step("Navigate to Products page - Mens > Jeans", async () => {
      await navigateToPage(page, "products");
      await ProductsPage.verifyUserIsOnCorrectProductsPage(page);
      await ProductsPage.navigateThroughProductsPages(page, UserType.Men, ProductCategory.Jeans);
    });

    await test.step("Add 2 items in the Cart", async () => {
      await Homepage.addProductToCart(page, jeansProductOneName);
      await clickContinueShoppingButtonInToast(page);
      await Homepage.addProductToCart(page, jeansProductTwoName);
      await clickContinueShoppingButtonInToast(page);
    });

    await test.step("Navigate to - Home Shopping Cart and verify items are correct", async () => {
      await navigateToPage(page, "cart");
      await CartPage.verifyCartHasTheCorrectProducts(page, [
        jeansProductOneName,
        jeansProductTwoName,
      ]);
    });

    await test.step("Click on Proceed to Checkout", async () => {
      await CartPage.clickProceedToCheckoutButton(page);
    });

    await test.step("Verify items, prices and total price", async () => {
      await CartPage.verifyOrderDetails(
        page,
        jeansProductOneName,
        product1Price,
        productsQuantity,
        jeansProductTwoName,
        product2Price,
        productsQuantity,
      );
    });

    await test.step("Verify total price in Checkout page", async () => {
      orderTotalPrice = jeansProductOnePrice + jeansProductTwoPrice;
      await CartPage.verifyOrderTotalPrice(page, String(`Rs. ${orderTotalPrice}`));
    });

    await test.step("Add comment to the order", async () => {
      await CartPage.addCommentToOrder(page, "Test comment");
    });

    await test.step("Click on Place order button to navigate to Payment page", async () => {
      await CartPage.clickPlaceOrderButton(page);
    });

    await test.step("Verify user is on Payment page and fill card details", async () => {
      await verifyBreadCrumbNav(page, { homePage: "Payment" });
    });

    await test.step("Fill card details", async () => {
      await PaymentPage.fillCardFields(
        page,
        cardHolderName,
        cardNumber,
        cvv,
        expirationMonth,
        expirationYear,
      );
    });

    await test.step("Click on Pay and Confirm button", async () => {
      await PaymentPage.clickPayAndConfirmButton(page);
    });

    await test.step("Verify success message is displayed", async () => {
      await PaymentPage.verifySuccessMessage(page);
    });

    await test.step("Download invoice and verify contents", async () => {
      const downloadPromise = page.waitForEvent("download");
      await PaymentPage.downloadInvoice(page);
      const download = await downloadPromise;

      await download.saveAs(INVOICE_PATH);

      const invoiceText: string = fs.readFileSync(INVOICE_PATH, "utf-8");

      const expectedInvoiceContent = `Hi ${cardHolderName}, Your total purchase amount is ${orderTotalPrice}. Thank you`;
      expect(invoiceText).toContain(String(expectedInvoiceContent));
    });
  });
});
