export const homepageElements = Object.freeze({
  homeButtonNav: `//*[@href='/']/text()[normalize-space(.)='Home']`,
  productsButtonNav: `//*[@href='/products']/text()[normalize-space(.)='Products']`,
  cartButtonNav: `//*[@href="/view_cart"]/text()[normalize-space(.)='Cart']`,
  signupLoginButtonNav: `//*[@href="/login"]/text()[normalize-space(.)='Signup / Login']`,
  logoutButtonNav: `//*[@href='/logout']/text()[normalize-space(.)='Logout']`,
  deleteAccountButtonNav: `//*[@href="/delete_account"]/text()[normalize-space(.)='Delete Account']`,
  testCasesButtonNav: `//*[@href="/test_cases"]/text()[normalize-space(.)='Test Cases']`,
  apiTestingButtonNav: `//*[@href="/api_test"]/text()[normalize-space(.)='API Testing']`,
  contactUsButtonNav: `//*[@href="/contact_us"]/text()[normalize-space(.)='Contact us']`,
  fullLoggedInTitle: `//*[@class='fa fa-user']/ancestor::a`,
  loggedInAsPartialTitle: `//text()[normalize-space(.)='Logged in as']`,
  loggedInAsUsername: `//text()[normalize-space(.)='Logged in as']//following-sibling::*`,
});
