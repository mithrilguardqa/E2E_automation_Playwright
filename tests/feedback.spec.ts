import path from "path";
import { expect, test } from "@playwright/test";
import { users } from "@data_providers/user_details";
import { blockAds, navigateToPage } from "@pages/base_page/base_page";
import { acceptCookies } from "@pages/base_page/base_page";
import { ProductCategory, products, UserType } from "@data_providers/products";
import { ProductsPage, ContactUsPage } from "@pages";
import { clickContactUsButton, verifyHomepageIsVisible } from "@pages/homepage/homepage";
import { fillContactUsForm, verifyUserIsOnContactUsPage } from "@pages/contact_us/contact_us_page";

test.describe("Check user can send feedback", () => {
  test.use({ storageState: users.default.authFile });

  test.beforeEach(async ({ page }) => {
    await navigateToPage(page, "homepage");
    await acceptCookies(page);
    await blockAds(page);
  });

  test("Check user can send feedback", async ({ page }) => {
    const productName = products[UserType.Women][ProductCategory.Saree][0].name;

    await test.step("Navigate to product details page", async () => {
      await navigateToPage(page, "products");
      await ProductsPage.verifyUserIsOnCorrectProductsPage(page);
      await ProductsPage.navigateThroughProductsPages(page, UserType.Women, ProductCategory.Saree);
      await ProductsPage.clickViewProductButton(page, productName);
    });

    await test.step("Fill review fields", async () => {
      await ProductsPage.fillReviewFields(
        page,
        "John Doe",
        "john.doe@example.com",
        "This is a test review",
      );
    });

    await test.step("Click submit review button", async () => {
      await ProductsPage.clickSubmitReviewButton(page);
    });

    await test.step("Verify review section is visible", async () => {
      const reviewSectionText: string = await ProductsPage.getReviewSectionText(page);
      expect(reviewSectionText).toContain("Thank you for your review.");
    });
  });

  test("Check user can send feedback from contact us page", async ({ page }) => {
    const name = "John Doe";
    const email = "john.doe@example.com";
    const subject = "Test Subject";
    const message = "This is a test message";
    const filePath = path.resolve("images/dark_MG_logo Medium.png");

    await test.step("Navigate to contact us page", async () => {
      await clickContactUsButton(page);
      await ContactUsPage.verifyUserIsOnContactUsPage(page);
    });

    await test.step("Fill contact us form", async () => {
      await fillContactUsForm(page, name, email, subject, message);
    });

    await test.step("Upload file", async () => {
      await ContactUsPage.uploadFile(page, filePath);
    });

    await test.step("Click submit button", async () => {
      await ContactUsPage.confirmDialog(page);
      await ContactUsPage.clickSubmitButton(page);
    });

    await test.step("Verify headers", async () => {
      await ContactUsPage.verifyHeaders(page);
    });

    await test.step("Click home link", async () => {
      await ContactUsPage.clickHomeLink(page);
    });

    await test.step("Verify user is on homepage", async () => {
      await verifyHomepageIsVisible(page);
    });
  });
});
