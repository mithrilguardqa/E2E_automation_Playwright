import { Page } from "@playwright/test";
import {
  isElementVisible,
  checkElementText,
  clickElement,
  getLocatorCount,
} from "../base_page/base_page.js";
import { elements } from "./cart.elements.js";

//Click functions
export const clickEmptyCartNavigateToProductsButton = async (page: Page): Promise<void> => {
  await clickElement(page, elements.emptyCartNavigateToProductsButton, false);
};

// Verify functions
export const verifyEmptyCartMessage = async (page: Page): Promise<void> => {
  const emptyCartMessage: string = `Cart is empty! Click here to buy products.`;
  await isElementVisible(page, elements.emptyCartMessage, true);
  await checkElementText(page, elements.emptyCartMessage, emptyCartMessage);
};

export const verifyUserIsOnCartPage = async (page: Page): Promise<void> => {
  await page.waitForURL(`**/view_cart`);
};

// Check functions
export const checkIsCartEmpty = async (page: Page): Promise<boolean> => {
  const cartRowCount = await getLocatorCount(page, elements.cartTableBody + "//tr");
  return cartRowCount === 0;
};

export const clearCart = async (page: Page): Promise<void> => {
  while (!(await checkIsCartEmpty(page))) {
    await clickElement(page, elements.cartDeleteButton, false);
    await page.waitForTimeout(500);
  }
};
