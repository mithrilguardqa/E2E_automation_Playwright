export const baseElements = Object.freeze({
  navBar: `//*[@class='shop-menu pull-right']`,
  productsButtonNavBar: `//*[@href='/products' and contains(text(),'Products')]`,
  cartButtonNavBar: `//*[@href="/view_cart"][normalize-space(.)='Cart']`,
  consentBanner: `//p[text()='Consent']`,
});
