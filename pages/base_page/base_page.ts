import { expect, Locator, Page } from "@playwright/test";
import { baseElements } from "./base.elements.js";
import config from "../../env.config.js";

export const randomString = (
  length?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13,
): string => {
  let timestampString: number = Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 1000);

  const validLength: number = length ? length : 13;

  return timestampString.toString().slice(-validLength);
};

export const getLocator = async (page: Page, selector: string): Promise<Locator> => {
  return page.locator(selector);
};

export const fillFieldInput = async (
  page: Page,
  selector: string,
  input: string,
  inputType: "value" | "text",
): Promise<void> => {
  const field: Locator = await getLocator(page, selector);

  await field.click();
  await expect(field).toBeEditable();
  await field.clear();
  await field.pressSequentially(input, { delay: 10 });

  if (inputType === "value") {
    await expect(field).toHaveValue(input);
  } else {
    await expect(field).toHaveText(input);
  }
};

export const clickElement = async (
  page: Page,
  selector: string,
  force: boolean = false,
): Promise<void> => {
  const element: Locator = await getLocator(page, selector);
  await expect(element).toBeVisible();
  await expect(element).toBeEnabled();
  await element.click({ force });
};

export const isElementVisible = async (
  page: Page,
  selector: string,
  isVisible: boolean,
): Promise<void> => {
  const field: Locator = await getLocator(page, selector);
  if (isVisible) {
    await expect(field).toBeVisible();
  } else {
    await expect(field).toBeHidden();
  }
};

export const isElementEnabled = async (
  page: Page,
  selector: string,
  isEnabled: boolean,
): Promise<void> => {
  const element: Locator = await getLocator(page, selector);
  if (isEnabled) {
    await expect(element).toBeEnabled();
  } else {
    await expect(element).toBeDisabled();
  }
};

export const isElementEmpty = async (
  page: Page,
  selector: string,
  isEmpty: boolean = true,
): Promise<void> => {
  const field: Locator = await getLocator(page, selector);
  if (isEmpty) {
    await expect(field).toBeEmpty();
  } else {
    await expect(field).not.toBeEmpty();
  }
};

export const checkElementText = async (
  page: Page,
  selector: string,
  value: string,
): Promise<void> => {
  const field: Locator = await getLocator(page, selector);
  await expect(field).toHaveText(value);
};

export const checkElementValue = async (
  page: Page,
  selector: string,
  value: string,
): Promise<void> => {
  const field: Locator = await getLocator(page, selector);
  await expect(field).toHaveValue(value);
};

export const isLocatorAttributeValuePresent = async (
  page: Page,
  selector: string,
  attribute: string,
  value: string,
  isPresent: boolean,
): Promise<void> => {
  const locator: Locator = await getLocator(page, selector);
  if (isPresent) {
    await expect(locator).toHaveAttribute(attribute, value, {
      ignoreCase: true,
    });
  } else {
    await expect(locator).not.toHaveAttribute(attribute, value, {
      ignoreCase: true,
    });
  }
};

export const getAllMatchingElementsText = async (
  page: Page,
  selector: string,
): Promise<string[]> => {
  const locator: Locator = await getLocator(page, selector);

  if ((await locator.count()) === 0) return [];
  return await locator.allInnerTexts();
};

export const getLocatorCount = async (page: Page, selector: string): Promise<number> => {
  const locator: Locator = await getLocator(page, selector);
  return locator.count();
};

/**
 * Maps an parameter of array of objects to an array of strings
 * @param array - array of objects
 * @param key - key of the property to get
 * @returns array of strings
 */
export const getArrayOfObjectsPropertyValues = (array: any[], key: string): string[] => {
  const result = array.map((item: any) => item[key]);
  return result.sort();
};

// Navigation helpers
export const navigateToPage = async (
  page: Page,
  pageName: "homepage" | "products" | "cart",
): Promise<void> => {
  switch (pageName) {
    case "homepage":
      await page.goto(config.baseUrl);
      break;
    case "products":
      await clickElement(page, baseElements.productsButtonNavBar, false);
      break;
    case "cart":
      await clickElement(page, baseElements.cartButtonNavBar, false);
      break;
    default:
      throw new Error(`Invalid page name: ${pageName}`);
  }
};

export const acceptCookies = async (page: Page): Promise<void> => {
  if (await page.locator(baseElements.consentBanner).isVisible()) {
    await page.locator(baseElements.consentBanner).click();
  }
};
