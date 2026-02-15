export const elements = Object.freeze({
  productName: `//*[@class='product-information']//h2`,
  productCategory: `//p[contains(text(),'Category')]`,
  productPrice: `//span[contains(text(),'Rs.')]`,
  productBrand: `//b[contains(text(),'Brand:')]/parent::*`,
  addToCartButton: `//button[contains(@class,'cart')]`,
  reviewNameField: `#name`,
  reviewEmailField: `#email`,
  reviewReviewTextArea: `#review`,
  submitReviewButton: `#button-review`,
});
