export const elements = Object.freeze({
  homepageLogo: `//img[@alt='Website for automation practice']`,
  homeButtonNavBar: `//*[@href='/'][normalize-space(.)='Home']`,
  productsButtonNavBar: `//*[@href='/products'][normalize-space(.)='Products']`,
  cartButtonNavBar: `//*[@href="/view_cart"][normalize-space(.)='Cart']`,
  signupLoginButtonNavBar: `//*[@href="/login"][normalize-space(.)='Signup / Login']`,
  logoutButtonNavBar: `//*[@href='/logout'][normalize-space(.)='Logout']`,
  deleteAccountButtonNavBar: `//*[@href="/delete_account"][normalize-space(.)='Delete Account']`,
  testCasesButtonNavBar: `//*[@href="/test_cases"][normalize-space(.)='Test Cases']`,
  contactUsButtonNavBar: `//*[@href="/contact_us"][normalize-space(.)='Contact us']`,
  fullLoggedInTitle: `//*[@class='fa fa-user']/ancestor::a`,
  loggedInAsPartialTitle: `//*[contains(text(), 'Logged in as')]`,
  loggedInAsUsername: `//*[@class='fa fa-user']/ancestor::a/b`,
});
