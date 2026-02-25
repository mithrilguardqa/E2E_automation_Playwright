import { Page } from "@playwright/test";
import {
  checkElementText,
  clickElement,
  fillFieldInput,
  isElementVisible,
} from "@pages/base_page/base_page";
import { elements } from "@pages/payment_page/element";

// Fill functions
export const fillCardFields = async (
  page: Page,
  nameOnCard: string,
  cardNumber: string,
  cvv: string,
  expirationMonth: string,
  expirationYear: string,
): Promise<void> => {
  await fillFieldInput(page, elements.nameOnCardField, nameOnCard, "value");
  await fillFieldInput(page, elements.cardNumberField, cardNumber, "value");
  await fillFieldInput(page, elements.cvvField, cvv, "value");
  await fillFieldInput(page, elements.expirationMonthField, expirationMonth, "value");
  await fillFieldInput(page, elements.expirationYearField, expirationYear, "value");
};

// Click functions
export const downloadInvoice = async (page: Page): Promise<void> => {
  await clickElement(page, elements.downloadInvoiceButton, false);
};

export const clickPayAndConfirmButton = async (page: Page): Promise<void> => {
  await clickElement(page, elements.payAndConfirmButton, false);
};

// Verify functions
export const verifyUserIsOnPaymentPage = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.paymentPageTitle, true);
};

export const verifySuccessMessage = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.orderPlacedHeader, true);
  await isElementVisible(page, elements.orderPlacedMessage, true);
  await checkElementText(page, elements.orderPlacedHeader, "Order Placed!");
  await checkElementText(
    page,
    elements.orderPlacedMessage,
    "Congratulations! Your order has been confirmed!",
  );
};
