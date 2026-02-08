import { Page } from "@playwright/test";
import {
  clickElement,
  isElementVisible,
  getLocatorCount,
} from "../base_page/base_page.js";
import { elements } from "./homepage.elements.js";

// Verify functions
export const verifyHomepageIsVisible = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.sliderCarousel, true);
  await isElementVisible(page, elements.featuresItemsContainer, true);
};

export const verifyFeaturedItemsTitle = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.featuresItemsTitle, true);
};

export const verifyCategorySidebarIsVisible = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.categorySidebar, true);
};

// Product interaction functions
export const getFeaturedProductsCount = async (page: Page): Promise<number> => {
  return await getLocatorCount(page, elements.productCard);
};

export const clickAddToCartByIndex = async (page: Page, index: number): Promise<void> => {
  const productCards = page.locator(elements.productCard);
  const card = productCards.nth(index);

  await card.scrollIntoViewIfNeeded();
  await card.hover();
  const overlay = card.locator(".product-overlay .add-to-cart");
  await overlay.click();
};

export const clickContinueShopping = async (page: Page): Promise<void> => {
  await clickElement(page, elements.continueShoppingButton);
};

export const clickViewCartFromModal = async (page: Page): Promise<void> => {
  await clickElement(page, elements.viewCartModalLink);
};

export const clickViewProductByIndex = async (page: Page, index: number): Promise<void> => {
  const viewLinks = page.locator(elements.viewProductLink);
  await viewLinks.nth(index).click();
};

// Category navigation functions
export const clickCategoryWomen = async (page: Page): Promise<void> => {
  await clickElement(page, elements.categoryWomen);
};

export const clickCategoryMen = async (page: Page): Promise<void> => {
  await clickElement(page, elements.categoryMen);
};

export const clickCategoryKids = async (page: Page): Promise<void> => {
  await clickElement(page, elements.categoryKids);
};

export const clickSubCategory = async (page: Page, selector: string): Promise<void> => {
  await clickElement(page, selector);
};

// Recommended items
export const verifyRecommendedItemsIsVisible = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.recommendedItemsContainer, true);
};
