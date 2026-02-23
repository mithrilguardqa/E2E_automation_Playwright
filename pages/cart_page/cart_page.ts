import { expect, Locator, Page } from "@playwright/test";
import {
  isElementVisible,
  checkElementText,
  clickElement,
  getLocatorCount,
  getLocator,
} from "../base_page/base_page.js";
import { elements } from "./cart.elements.js";

//Click functions
export const clickEmptyCartNavigateToProductsButton = async (page: Page): Promise<void> => {
  await clickElement(page, elements.emptyCartNavigateToProductsButton, false);
};

export const clickProceedToCheckoutButton = async (page: Page): Promise<void> => {
  await clickElement(page, elements.proceedToCheckoutButton, false);
};

export const clearCart = async (page: Page): Promise<void> => {
  const cartItemsLocators: Locator[] = await page.locator(".cart_quantity_delete").all();

  while (!(await checkIsCartEmpty(page))) {
    await cartItemsLocators[0].click();
    await page.waitForTimeout(500);
  }
};

export const addCommentToOrder = async (page: Page, comment: string): Promise<void> => {
  const field: Locator = await getLocator(page, elements.commentInput);

  await field.click();
  await expect(field).toBeEditable();
  await field.clear();
  await field.pressSequentially(comment, { delay: 10 });
};

export const clickPlaceOrderButton = async (page: Page): Promise<void> => {
  await clickElement(page, elements.placeOrderButton, false);
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

export const verifyCartHasTheCorrectProducts = async (
  page: Page,
  productNames: string[],
): Promise<void> => {
  const productNamesArray: string[] = productNames;

  const cartItemsLocators: string[] = productNamesArray.map(
    (productName) => `//a[contains(@href,"/product_details/") and text()='${productName}']`,
  );
  for (const cartItemLocator of cartItemsLocators) {
    await isElementVisible(page, cartItemLocator, true);
  }
};

export const verifyDeliveryAddressDetails = async (
  page: Page,
  firstName: string,
  lastName: string,
  companyName: string,
  address: string,
  address2: string,
  country: string,
  state: string,
  city: string,
  zip: string,
  phone: string,
): Promise<void> => {
  const fields: { locator: string; value: string }[] = [
    {
      locator: `//*[@id='address_delivery']//li[text()='. ${firstName} ${lastName}']`,
      value: `. ${firstName} ${lastName}`,
    },
    { locator: `//*[@id='address_delivery']//li[text()='${companyName}']`, value: companyName },
    { locator: `//*[@id='address_delivery']//li[text()='${address}']`, value: address },
    { locator: `//*[@id='address_delivery']//li[text()='${address2}']`, value: address2 },
    {
      locator: `//*[@id='address_delivery']//li[normalize-space()='${city} ${state} ${zip}']`,
      value: `${city} ${state} ${zip}`,
    },
    { locator: `//*[@id='address_delivery']//li[text()='${country}']`, value: `${country}` },
    { locator: `//*[@id='address_delivery']//li[text()='${phone}']`, value: `${phone}` },
  ];
  for (const { locator, value } of fields) {
    await checkElementText(page, locator, value);
  }
};

export const verifyBillingAddressDetails = async (
  page: Page,
  firstName: string,
  lastName: string,
  companyName: string,
  address: string,
  address2: string,
  country: string,
  state: string,
  city: string,
  zip: string,
  phone: string,
): Promise<void> => {
  const fields: { locator: string; value: string }[] = [
    {
      locator: `//*[@id='address_invoice']//li[text()='. ${firstName} ${lastName}']`,
      value: `. ${firstName} ${lastName}`,
    },
    { locator: `//*[@id='address_invoice']//li[text()='${companyName}']`, value: companyName },
    { locator: `//*[@id='address_invoice']//li[text()='${address}']`, value: address },
    { locator: `//*[@id='address_invoice']//li[text()='${address2}']`, value: address2 },
    {
      locator: `//*[@id='address_invoice']//li[normalize-space()='${city} ${state} ${zip}']`,
      value: `${city} ${state} ${zip}`,
    },
    { locator: `//*[@id='address_invoice']//li[text()='${country}']`, value: `${country}` },
    { locator: `//*[@id='address_invoice']//li[text()='${phone}']`, value: `${phone}` },
  ];
  for (const { locator, value } of fields) {
    await checkElementText(page, locator, value);
  }
};

export const verifyOrderDetails = async (
  page: Page,
  product1Name: string,
  product1Price: string,
  product1Quantity: string,
  product2Name: string,
  product2Price: string,
  product2Quantity: string,
): Promise<void> => {
  const fields: { locator: string; value: string }[] = [
    {
      locator: `//*[@id='cart_info']//*[contains(@id,'product')][1]//a[contains(@href,'product_details')]`,
      value: product1Name,
    },
    {
      locator: `//*[@id='cart_info']//*[contains(@id,'product')][1]//*[@class='cart_price']//p`,
      value: product1Price,
    },
    {
      locator: `//*[@id='cart_info']//*[contains(@id,'product')][1]//*[@class='cart_quantity']//button`,
      value: product1Quantity,
    },
    {
      locator: `//*[@id='cart_info']//*[contains(@id,'product')][2]//a[contains(@href,'product_details')]`,
      value: product2Name,
    },
    {
      locator: `//*[@id='cart_info']//*[contains(@id,'product')][2]//*[@class='cart_price']//p`,
      value: product2Price,
    },
    {
      locator: `//*[@id='cart_info']//*[contains(@id,'product')][2]//*[@class='cart_quantity']//button`,
      value: product2Quantity,
    },
  ];
  for (const { locator, value } of fields) {
    await checkElementText(page, locator, value);
  }
};

export const verifyOrderTotalPrice = async (page: Page, totalPrice: string): Promise<void> => {
  await checkElementText(page, elements.orderTotalPrice, totalPrice);
};

// Check functions
export const checkIsCartEmpty = async (page: Page): Promise<boolean> => {
  const cartRowCount = await getLocatorCount(page, elements.cartTableBody + "//tr");
  return cartRowCount === 0;
};
