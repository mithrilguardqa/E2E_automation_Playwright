import { Page } from "@playwright/test";
import {
  clickElement,
  fillFieldInput,
  isElementVisible,
  getLocatorCount,
  getAllMatchingElementsText,
} from "../base_page/base_page.js";
import { elements } from "./cart.elements.js";

// Verify functions
export const verifyCartPage = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.cartTable, true);
};

export const verifyCartIsEmpty = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.emptyCartMessage, true);
};

// Get cart info functions
export const getCartProductCount = async (page: Page): Promise<number> => {
  return await getLocatorCount(page, elements.cartProductRow);
};

export const getCartProductNames = async (page: Page): Promise<string[]> => {
  return await getAllMatchingElementsText(page, elements.cartProductName);
};

export const getCartProductPrices = async (page: Page): Promise<string[]> => {
  return await getAllMatchingElementsText(page, elements.cartProductPrice);
};

// Interaction functions
export const updateQuantityByIndex = async (
  page: Page,
  index: number,
  quantity: string
): Promise<void> => {
  const quantityInputs = page.locator(elements.cartProductQuantity);
  const input = quantityInputs.nth(index);
  await input.clear();
  await input.fill(quantity);
};

export const markForRemovalByIndex = async (page: Page, index: number): Promise<void> => {
  const checkboxes = page.locator(elements.cartRemoveCheckbox);
  await checkboxes.nth(index).check();
};

export const clickUpdateCart = async (page: Page): Promise<void> => {
  await clickElement(page, elements.updateCartButton);
};

export const clickContinueShopping = async (page: Page): Promise<void> => {
  await clickElement(page, elements.continueShoppingButton);
};

// Discount and gift card functions
export const applyDiscountCode = async (page: Page, code: string): Promise<void> => {
  await fillFieldInput(page, elements.discountCodeInput, code, "value");
  await clickElement(page, elements.applyDiscountButton);
};

export const applyGiftCardCode = async (page: Page, code: string): Promise<void> => {
  await fillFieldInput(page, elements.giftCardInput, code, "value");
  await clickElement(page, elements.applyGiftCardButton);
};

// Checkout functions
export const agreeToTermsOfService = async (page: Page): Promise<void> => {
  await page.locator(elements.termsOfServiceCheckbox).check();
};

export const clickCheckout = async (page: Page): Promise<void> => {
  await clickElement(page, elements.checkoutButton);
};
