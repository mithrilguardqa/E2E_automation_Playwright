import { Page } from "@playwright/test";
import { clickElement, isElementVisible } from "../base_page/base_page.js";
import { elements } from "./product_details.elements.js";

// Verify functions
export const verifyProductDetailsPage = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.productName, true);
  await isElementVisible(page, elements.productPrice, true);
  await isElementVisible(page, elements.addToCartButton, true);
};

export const verifyProductName = async (page: Page, name: string): Promise<void> => {
  await checkElementContainsText(page, elements.productName, name);
};

export const verifyProductAvailability = async (
  page: Page,
  availability: string,
): Promise<void> => {
  await checkElementContainsText(page, elements.productAvailability, availability);
};

export const verifyShortDescription = async (page: Page, description: string): Promise<void> => {
  await checkElementContainsText(page, elements.productShortDescription, description);
};

// Interaction functions
export const setQuantity = async (page: Page, quantity: string): Promise<void> => {
  const quantityField = page.locator(elements.quantityInput);
  await quantityField.clear();
  await quantityField.fill(quantity);
};

export const clickAddToCart = async (page: Page): Promise<void> => {
  await clickElement(page, elements.addToCartButton);
};

export const clickAddToWishlist = async (page: Page): Promise<void> => {
  await clickElement(page, elements.addToWishlistButton);
};

export const clickAddToCompare = async (page: Page): Promise<void> => {
  await clickElement(page, elements.addToCompareButton);
};

export const clickEmailFriend = async (page: Page): Promise<void> => {
  await clickElement(page, elements.emailFriendButton);
};

// Notification bar
export const verifySuccessNotification = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.barNotificationSuccess, true);
};

export const closeNotificationBar = async (page: Page): Promise<void> => {
  await clickElement(page, elements.barNotificationClose);
};

// Product reviews
export const clickProductReviewsLink = async (page: Page): Promise<void> => {
  await clickElement(page, elements.productReviewsLink);
};
