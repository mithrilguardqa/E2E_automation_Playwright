import { expect, Page } from "@playwright/test";

export const verifyUserIsOnContactUsPage = async (page: Page): Promise<void> => {
  await expect(page).toHaveURL("/contact_us");
};

export const fillContactUsForm = async (
  page: Page,
  name: string,
  email: string,
  subject: string,
  message: string,
): Promise<void> => {
  const nameField = getContactUsElements(page).nameField;
  await nameField.click();
  await nameField.pressSequentially(name, { delay: 10 });
  const emailField = getContactUsElements(page).emailField;
  await emailField.click();
  await emailField.pressSequentially(email, { delay: 10 });
  const subjectField = getContactUsElements(page).subjectField;
  await subjectField.click();
  await subjectField.pressSequentially(subject, { delay: 10 });
  const messageField = getContactUsElements(page).messageField;
  await messageField.click();
  await messageField.pressSequentially(message, { delay: 10 });
};

export const getContactUsElements = (page: Page) => ({
  nameField: page.getByRole("textbox", { name: "Name" }),
  emailField: page.getByRole("textbox", { name: "Email", exact: true }),
  subjectField: page.getByRole("textbox", { name: "Subject" }),
  messageField: page.getByRole("textbox", { name: "Your Message Here" }),
  submitButton: page.getByRole("button", { name: "Submit" }),
  uploadFileInput: page.locator('input[type="file"][name="upload_file"]'),
  getInTouchHeading: page.getByRole("heading", { name: "Get In Touch" }),
  successMessage: page.locator("#contact-page").getByText("Success! Your details have"),
  homeLink: page.getByRole("link", { name: " Home" }),
  closeAdButton: page
    .locator('iframe[name="aswift_2"]')
    .contentFrame()
    .getByRole("button", { name: "Close ad" }),
});

export const uploadFile = async (page: Page, filePath: string): Promise<void> => {
  await getContactUsElements(page).uploadFileInput.setInputFiles(filePath);
};

export const clickSubmitButton = async (page: Page): Promise<void> => {
  await getContactUsElements(page).submitButton.click();
};

export const confirmDialog = async (page: Page): Promise<void> => {
  page.once("dialog", async (dialog) => {
    await dialog.accept();
  });
};

export const clickHomeLink = async (page: Page): Promise<void> => {
  await getContactUsElements(page).homeLink.click();
};

export const verifyHeaders = async (page: Page): Promise<void> => {
  await expect(getContactUsElements(page).getInTouchHeading).toBeVisible();
  await expect(getContactUsElements(page).successMessage).toBeVisible();
};
