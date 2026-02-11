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
export const verifyCategoryPage = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.categoryTitle, true);
};

export const verifyCategoryTitle = async (page: Page, title: string): Promise<void> => {
  await checkElementContainsText(page, elements.categoryTitle, title);
};

export const verifyProductsAreDisplayed = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.productItem, true);
};

export const verifyNoResults = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.noResultMessage, true);
};

// Product interaction functions
export const getProductCount = async (page: Page): Promise<number> => {
  return await getLocatorCount(page, elements.productItem);
};

export const getAllProductNames = async (page: Page): Promise<string[]> => {
  return await getAllMatchingElementsText(page, elements.productName);
};

export const clickProductByIndex = async (page: Page, index: number): Promise<void> => {
  const products = page.locator(elements.productName);
  await products.nth(index).click();
};

export const clickAddToCartByIndex = async (page: Page, index: number): Promise<void> => {
  const addButtons = page.locator(elements.addToCartButton);
  await addButtons.nth(index).click();
};

export const clickAddToWishlistByIndex = async (page: Page, index: number): Promise<void> => {
  const wishlistButtons = page.locator(elements.addToWishlistButton);
  await wishlistButtons.nth(index).click();
};

export const clickAddToCompareByIndex = async (page: Page, index: number): Promise<void> => {
  const compareButtons = page.locator(elements.addToCompareButton);
  await compareButtons.nth(index).click();
};

// Sorting and display functions
export const selectSortBy = async (page: Page, option: string): Promise<void> => {
  await page.locator(elements.sortByDropdown).selectOption(option);
};

export const selectDisplayPerPage = async (page: Page, option: string): Promise<void> => {
  await page.locator(elements.displayPerPageDropdown).selectOption(option);
};

export const switchToGridView = async (page: Page): Promise<void> => {
  await clickElement(page, elements.viewModeGrid);
};

export const switchToListView = async (page: Page): Promise<void> => {
  await clickElement(page, elements.viewModeList);
};

// Sub-category functions
export const getSubCategoryCount = async (page: Page): Promise<number> => {
  return await getLocatorCount(page, elements.subCategoryItem);
};

export const clickSubCategoryByIndex = async (page: Page, index: number): Promise<void> => {
  const subCategories = page.locator(elements.subCategoryTitle);
  await subCategories.nth(index).click();
};

// Search page functions
export const searchProduct = async (page: Page, searchTerm: string): Promise<void> => {
  await fillFieldInput(page, elements.searchInput, searchTerm, "value");
  await clickElement(page, elements.searchButton);
};
