export const elements = Object.freeze({
  // Products page
  allProductsTitle: `//h2[text()='All Products']`,
  searchedProductsTitle: `//h2[text()='Searched Products']`,
  searchInput: `input#search_product`,
  searchButton: `button#submit_search`,

  // Product cards
  productCard: `.features_items .col-sm-4`,
  productName: `.productinfo p`,
  productPrice: `.productinfo h2`,
  addToCartButton: `.productinfo .add-to-cart`,
  overlayAddToCartButton: `.product-overlay .add-to-cart`,
  viewProductLink: `.choose a`,

  // "Added to cart" modal
  addedToCartModal: `#cartModal`,
  continueShoppingButton: `#cartModal .btn-success`,
  viewCartLink: `#cartModal a[href="/view_cart"]`,
});
