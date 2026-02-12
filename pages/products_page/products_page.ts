import { Page } from "@playwright/test";
import {
  clickElement,
  fillFieldInput,
  isElementVisible,
  getLocatorCount,
  getAllMatchingElementsText,
} from "../base_page/base_page.js";
import { elements } from "./products.elements.js";

// Click functions

// Verify functions
export const userIsOnProductsPage = async (page: Page): Promise<void> => {
  await page.waitForURL(`**/products`);
  await isElementVisible(page, elements.saleImage, true);
};

// Check functions
