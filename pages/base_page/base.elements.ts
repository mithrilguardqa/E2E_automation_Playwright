export const baseElements = Object.freeze({
  // Navbar elements (shared across all pages)
  navHome: `a[href="/"]`,
  navProducts: `a[href="/products"]`,
  navCart: `a[href="/view_cart"]`,
  navSignupLogin: `a[href="/login"]`,
  navTestCases: `a[href="/test_cases"]`,
  navApiTesting: `a[href="/api_list"]`,
  navContactUs: `a[href="/contact_us"]`,
  navLogout: `a[href="/logout"]`,
  navDeleteAccount: `a[href="/delete_account"]`,
  navLoggedInAs: `.navbar-nav li:last-child a`,

  // Common elements
  consentButton: `button.fc-cta-consent`,
});
