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
  await isElementVisible(page, elements.cartInfoTable, true);
};

export const verifyCartIsEmpty = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.emptyCartMessage, true);
};

export const verifyOrderPlaced = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.orderConfirmationTitle, true);
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

export const getCartProductQuantities = async (page: Page): Promise<string[]> => {
  return await getAllMatchingElementsText(page, elements.cartProductQuantity);
};

// Interaction functions
export const removeProductByIndex = async (page: Page, index: number): Promise<void> => {
  const deleteButtons = page.locator(elements.cartDeleteButton);
  await deleteButtons.nth(index).click();
};

export const clickProceedToCheckout = async (page: Page): Promise<void> => {
  await clickElement(page, elements.proceedToCheckoutButton);
};

export const clickRegisterLoginFromCart = async (page: Page): Promise<void> => {
  await clickElement(page, elements.registerLoginLink);
};

// Checkout functions
export const fillCheckoutComment = async (page: Page, comment: string): Promise<void> => {
  await fillFieldInput(page, elements.commentTextArea, comment, "value");
};

export const clickPlaceOrder = async (page: Page): Promise<void> => {
  await clickElement(page, elements.placeOrderButton);
};

// Payment functions
export const fillPaymentDetails = async (
  page: Page,
  paymentInfo: {
    nameOnCard: string;
    cardNumber: string;
    cvc: string;
    expiryMonth: string;
    expiryYear: string;
  }
): Promise<void> => {
  await fillFieldInput(page, elements.nameOnCardField, paymentInfo.nameOnCard, "value");
  await fillFieldInput(page, elements.cardNumberField, paymentInfo.cardNumber, "value");
  await fillFieldInput(page, elements.cvcField, paymentInfo.cvc, "value");
  await fillFieldInput(page, elements.expiryMonthField, paymentInfo.expiryMonth, "value");
  await fillFieldInput(page, elements.expiryYearField, paymentInfo.expiryYear, "value");
};

export const clickPayAndConfirm = async (page: Page): Promise<void> => {
  await clickElement(page, elements.payAndConfirmButton);
};
