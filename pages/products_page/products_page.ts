import { Page } from "@playwright/test";
import {
  clickElement,
  fillFieldInput,
  isElementVisible,
  getLocatorCount,
  getAllMatchingElementsText,
} from "../base_page/base_page.js";
import { elements } from "./products.elements.js";

// Verify functions
export const verifyAllProductsPage = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.allProductsTitle, true);
};

export const verifySearchedProductsTitle = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.searchedProductsTitle, true);
};

// Search functions
export const searchProduct = async (page: Page, productName: string): Promise<void> => {
  await fillFieldInput(page, elements.searchInput, productName, "value");
  await clickElement(page, elements.searchButton);
};

// Product interaction functions
export const getProductCount = async (page: Page): Promise<number> => {
  return await getLocatorCount(page, elements.productCard);
};

export const getAllProductNames = async (page: Page): Promise<string[]> => {
  return await getAllMatchingElementsText(page, elements.productName);
};

export const clickAddToCartByIndex = async (page: Page, index: number): Promise<void> => {
  const productCards = page.locator(elements.productCard);
  const card = productCards.nth(index);

  await card.scrollIntoViewIfNeeded();
  await card.hover();
  const overlay = card.locator(".product-overlay .add-to-cart");
  await overlay.click();
};

export const clickViewProductByIndex = async (page: Page, index: number): Promise<void> => {
  const viewLinks = page.locator(elements.viewProductLink);
  await viewLinks.nth(index).click();
};

export const clickContinueShopping = async (page: Page): Promise<void> => {
  await clickElement(page, elements.continueShoppingButton);
};

export const clickViewCartFromModal = async (page: Page): Promise<void> => {
  await clickElement(page, elements.viewCartLink);
};
