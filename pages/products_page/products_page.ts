import { expect, Page } from "@playwright/test";
import {
  checkElementText,
  clickElement,
  fillFieldInput,
  getAllMatchingElementsText,
  getLocatorCount,
  isElementVisible,
} from "../base_page/base_page.js";
import { elements } from "./products.elements.js";
import { AllowedCategory, ProductCategory, UserType } from "@data_providers/products.js";

// Navigate through products pages
export const navigateThroughProductsPages = async <U extends UserType>(
  page: Page,
  userType: U,
  category: AllowedCategory<U>,
): Promise<void> => {
  const accordionLocators = {
    [UserType.Women]: elements.womenAccordionExpandButton,
    [UserType.Men]: elements.menAccordionExpandButton,
    [UserType.Kids]: elements.kidsAccordionExpandButton,
  };

  const categoryLocators: {
    [K in UserType]: Record<AllowedCategory<K>, string>;
  } = {
    [UserType.Men]: {
      [ProductCategory.Tshirts]: elements.menSectionTShirtButton,
      [ProductCategory.Jeans]: elements.menSectionJeansButton,
    },
    [UserType.Women]: {
      [ProductCategory.Tops]: elements.womenSectionTopsButton,
      [ProductCategory.Dress]: elements.womenSectionDressButton,
      [ProductCategory.Saree]: elements.womenSectionSareeButton,
    },
    [UserType.Kids]: {
      [ProductCategory.TopsAndShirts]: elements.kidsSectionBabyTShirtButton,
      [ProductCategory.Dress]: elements.kidsSectionBabyDressButton,
    },
  };

  await clickElement(page, accordionLocators[userType], true);

  await clickElement(page, categoryLocators[userType][category], false);
};

// Click functions
export const clickViewProductButton = async (page: Page, productName: string): Promise<void> => {
  const viewProductSelector: string = `//p[contains(text(),'${productName}')]/ancestor::div[@class='single-products']//following-sibling::div[@class='choose']//*[text()='View Product']`;

  await clickElement(page, viewProductSelector, false);
};

// Verify functions
export const verifyUserIsOnCorrectProductsPage = async (
  page: Page,
  userType?: UserType,
  category?: AllowedCategory<UserType>,
): Promise<void> => {
  if (userType && category) {
    const pageTitle: string = `${userType} - ${category} Products`;
    const pageTitleLocator: string = elements.productsPageTitle;

    await isElementVisible(page, pageTitleLocator, true);
    await checkElementText(page, pageTitleLocator, pageTitle);
  } else {
    await page.waitForURL(`**/products`);
    await isElementVisible(page, elements.saleImage, true);
  }
};

export const verifyProductsCount = async (page: Page, expectedCount: number): Promise<void> => {
  const actualCount: number = await getLocatorCount(page, elements.productsCardsContainers);
  expect(actualCount).toEqual(expectedCount);
};

export const verifyProductNames = async (page: Page, productName: string): Promise<void> => {
  await page.waitForSelector(elements.productsCardNames, { state: "visible" });

  const actualProductNames: string[] = await getAllMatchingElementsText(
    page,
    elements.productsCardNames,
  );

  for (const name of actualProductNames) {
    expect(name.toLowerCase()).toContain(productName.toLowerCase());
  }
};

// Search functions
export const searchProduct = async (page: Page, searchQuery: string): Promise<void> => {
  await fillFieldInput(page, elements.searchInput, searchQuery, "value");
  await clickElement(page, elements.submitSearchButton, false);
};
