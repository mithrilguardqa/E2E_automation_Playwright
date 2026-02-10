export const elements = Object.freeze({
  homepageLogo: `//img[@alt='Website for automation practice']`,
  homeButtonNavBar: `//*[@href='/']/text()[normalize-space(.)='Home']`,
  productsButtonNavBar: `//*[@href='/products']/text()[normalize-space(.)='Products']`,
  cartButtonNavBar: `//*[@href="/view_cart"]/text()[normalize-space(.)='Cart']`,
  signupLoginButtonNavBar: `//*[@href="/login"]/text()[normalize-space(.)='Signup / Login']`,
  logoutButtonNavBar: `//*[@href='/logout']/text()[normalize-space(.)='Logout']`,
  deleteAccountButtonNavBar: `//*[@href="/delete_account"]/text()[normalize-space(.)='Delete Account']`,
  testCasesButtonNavBar: `//*[@href="/test_cases"]/text()[normalize-space(.)='Test Cases']`,
  contactUsButtonNavBar: `//*[@href="/contact_us"]/text()[normalize-space(.)='Contact us']`,
  fullLoggedInTitle: `//*[@class='fa fa-user']/ancestor::a`,
  loggedInAsPartialTitle: `//text()[normalize-space(.)='Logged in as']`,
  loggedInAsUsername: `//text()[normalize-space(.)='Logged in as']//following-sibling::*`,
});
