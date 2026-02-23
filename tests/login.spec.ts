import { test } from "@playwright/test";
import { acceptCookies, blockAds, navigateToPage } from "@pages/base_page/base_page";
import { Homepage, LoginPage } from "@pages";
import { generateUserData } from "@data_providers/data_generators";
import { defaultUserDetails } from "@data_providers/user_details";
import config from "@env";

test.describe("Login and registration tests", () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test.beforeEach(async ({ page }) => {
    await blockAds(page);
    await navigateToPage(page, "homepage");
    await acceptCookies(page);
  });

  test("Verify user can login successfully", async ({ page }) => {
    await test.step("Login to the website", async () => {
      await LoginPage.clickOnSignupLoginButtonNavBar(page);
      await LoginPage.fillLoginEmail(page, defaultUserDetails.email);
      await LoginPage.fillLoginPassword(page, config.password);
      await LoginPage.clickLoginSubmit(page);
    });

    await test.step("Verify user is logged in", async () => {
      await Homepage.verifyUserIsLogged(page, defaultUserDetails.name);
    });

    await test.step("Logout from the website", async () => {
      await Homepage.logout(page);
    });

    await test.step("Verify user is logged out", async () => {
      await Homepage.verifyUserIsLoggedOut(page);
    });

    await test.step("Verify user is on login page", async () => {
      await LoginPage.verifyUserIsOnLoginPage(page);
    });
  });

  test("Verify user can register successfully", async ({ page }) => {
    const userData = generateUserData();
    const password = config.password;

    await test.step("Click on Signup/Login button", async () => {
      await LoginPage.clickOnSignupLoginButtonNavBar(page);
    });

    await test.step("Verify user is on first page of registration form", async () => {
      await LoginPage.verifyUserIsOnFirstPageOfRegistrationForm(page);
    });

    await test.step("Fill registration form for user with already existing email", async () => {
      await LoginPage.fillSignupName(page, defaultUserDetails.name);
      await LoginPage.fillSignupEmail(page, defaultUserDetails.email);
      await LoginPage.clickSignupSubmit(page);
      await LoginPage.verifyErrorExistingEmail(page);
    });

    await test.step("Fill registration form for user with new email", async () => {
      await LoginPage.fillSignupEmail(page, userData.email);
      await LoginPage.clickSignupSubmit(page);
    });

    await test.step("Verify user is on second page of registration form", async () => {
      await LoginPage.verifyUserIsOnSecondPageOfRegistrationForm(page);
    });

    await test.step("Fill all fields on second page of registration form", async () => {
      await LoginPage.chooseGender(page, "mr");
      await LoginPage.checkFirstNameIsPrefilled(page, userData.first_name);
      await LoginPage.checkEmailIsPrefilled(page, userData.email);
      await LoginPage.checkEmailIsDisabled(page);
      await LoginPage.fillPassword(page, password);
      await LoginPage.chooseDayOfBirth(page, userData.birth_day);
      await LoginPage.chooseMonthOfBirth(page, userData.birth_month);
      await LoginPage.chooseYearOfBirth(page, userData.birth_year);
      await LoginPage.signUpForNewsletter(page);
      await LoginPage.signUpForSpecialOffers(page);
      await LoginPage.fillFirstName(page, userData.first_name);
      await LoginPage.fillLastName(page, userData.last_name);
      await LoginPage.fillCompany(page, userData.company);
      await LoginPage.fillAddress1(page, userData.address1);
      await LoginPage.fillAddress2(page, userData.address2);
      await LoginPage.chooseCountry(page, userData.country);
      await LoginPage.fillState(page, userData.state);
      await LoginPage.fillCity(page, userData.city);
      await LoginPage.fillZipcode(page, userData.zipcode);
      await LoginPage.fillMobileNumber(page, userData.phone);
    });

    await test.step("Click on Create Account button", async () => {
      await LoginPage.clickCreateAccountButton(page);
    });

    await test.step("Verify user is on successfully created account page", async () => {
      await page.waitForURL(`**/account_created`);
    });

    await test.step("Verify success message is displayed", async () => {
      await LoginPage.verifyUserIsOnSuccessfullyCreatedOrDeletedAccount(page, "create");
    });

    await test.step("Click on Continue button", async () => {
      await LoginPage.clickContinueButton(page);
    });

    await test.step("Verify user is logged in", async () => {
      await Homepage.verifyUserIsLogged(page, userData.name);
    });

    await test.step("Delete the newly created user", async () => {
      await Homepage.deleteUserAccount(page);
    });
    await test.step("Verify user is on successfully deleted account page", async () => {
      await page.waitForURL(`**/delete_account`);
    });
    await test.step("Verify success message is displayed", async () => {
      await LoginPage.verifyUserIsOnSuccessfullyCreatedOrDeletedAccount(page, "delete");
    });
    await test.step("Click on Continue button", async () => {
      await LoginPage.clickContinueButton(page);
    });

    await test.step("Verify user is logged out", async () => {
      await Homepage.verifyUserIsLoggedOut(page);
    });
  });
});
