import { expect, Page } from "@playwright/test";
import {
  checkElementText,
  clickElement,
  getLocatorCount,
  isElementVisible,
} from "../base_page/base_page.js";
import { elements } from "./products.elements.js";
import { AllowedCategory, ProductCategory, products, UserType } from "@data_providers/products.js";

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

export const verifyBreadCrumbNav = async (page: Page, breadcrumbText: string): Promise<void> => {
  // const breadcrumbTextString: string = await page.innerText(elements.breadcrumb);

  await isElementVisible(page, elements.breadcrumb, true);
  await checkElementText(page, elements.breadcrumb, breadcrumbText);

  // return breadcrumbTextString;
};
