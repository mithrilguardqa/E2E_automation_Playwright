import { Page } from "@playwright/test";
import {
  clickElement,
  isElementVisible,
  getLocatorCount,
  getAllMatchingElementsText,
} from "../base_page/base_page.js";
import { elements } from "./homepage.elements.js";

// Verify functions
export const verifyHomepageIsVisible = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.welcomeTopic, true);
  await isElementVisible(page, elements.featuredProductItem, true);
};

export const verifyFeaturedProductsVisible = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.featuredProductsTitle, true);
};

export const verifyCategoryCardsVisible = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.categoryCards, true);
};

export const verifyNewsSectionVisible = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.newsSection, true);
};

// Product interaction functions
export const getFeaturedProductsCount = async (page: Page): Promise<number> => {
  return await getLocatorCount(page, elements.featuredProductItem);
};

export const getFeaturedProductNames = async (page: Page): Promise<string[]> => {
  return await getAllMatchingElementsText(page, elements.featuredProductName);
};

export const clickFeaturedProductByIndex = async (page: Page, index: number): Promise<void> => {
  const products = page.locator(elements.featuredProductName);
  await products.nth(index).click();
};

export const clickAddToCartByIndex = async (page: Page, index: number): Promise<void> => {
  const addButtons = page.locator(elements.featuredAddToCartButton);
  await addButtons.nth(index).click();
};

// Category navigation functions
export const clickCategoryElectronics = async (page: Page): Promise<void> => {
  await clickElement(page, elements.categoryElectronics);
};

export const clickCategoryApparel = async (page: Page): Promise<void> => {
  await clickElement(page, elements.categoryApparel);
};

export const clickCategoryDigitalDownloads = async (page: Page): Promise<void> => {
  await clickElement(page, elements.categoryDigitalDownloads);
};

// News functions
export const getNewsCount = async (page: Page): Promise<number> => {
  return await getLocatorCount(page, elements.newsItem);
};

export const getNewsTitles = async (page: Page): Promise<string[]> => {
  return await getAllMatchingElementsText(page, elements.newsTitle);
};
