import { Page } from "@playwright/test";
import { clickElement, fillFieldInput, isElementVisible } from "../base_page/base_page.js";
import { elements } from "./contact_us.elements.js";

// Verify functions
export const verifyContactUsPage = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.getInTouchTitle, true);
};

export const verifySuccessMessage = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.successMessage, true);
};

// Fill functions
export const fillContactForm = async (
  page: Page,
  contactInfo: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
): Promise<void> => {
  await fillFieldInput(page, elements.nameField, contactInfo.name, "value");
  await fillFieldInput(page, elements.emailField, contactInfo.email, "value");
  await fillFieldInput(page, elements.subjectField, contactInfo.subject, "value");
  await fillFieldInput(page, elements.messageField, contactInfo.message, "value");
};

export const uploadFile = async (page: Page, filePath: string): Promise<void> => {
  await page.locator(elements.uploadFileInput).setInputFiles(filePath);
};

// Click functions
export const clickSubmitButton = async (page: Page): Promise<void> => {
  await clickElement(page, elements.submitButton);
};

export const clickHomeButton = async (page: Page): Promise<void> => {
  await clickElement(page, elements.homeButton);
};
