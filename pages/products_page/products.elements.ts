export const elements = Object.freeze({
  // Category page
  categoryTitle: `.page-title h1`,

  // Product grid
  productItem: `.product-grid .item-box`,
  productName: `.product-grid .item-box .product-title a`,
  productPrice: `.product-grid .item-box .actual-price`,
  addToCartButton: `.product-grid .item-box .product-box-add-to-cart-button`,
  addToCompareButton: `.product-grid .item-box .add-to-compare-list-button`,
  addToWishlistButton: `.product-grid .item-box .add-to-wishlist-button`,

  // Sorting and display
  sortByDropdown: `select#products-orderby`,
  displayPerPageDropdown: `select#products-pagesize`,
  viewModeGrid: `a.viewmode-icon[title="Grid"]`,
  viewModeList: `a.viewmode-icon[title="List"]`,

  // Pager
  pager: `.pager`,
  pagerCurrentPage: `.pager .current-page`,
  pagerNextPage: `.pager .next-page a`,
  pagerPreviousPage: `.pager .previous-page a`,

  // Sub-categories
  subCategoryItem: `.sub-category-item`,
  subCategoryTitle: `.sub-category-item .title a`,

  // Search results page
  searchInput: `input#q`,
  searchButton: `.search-input .search-button`,
  advancedSearchCheckbox: `input#advs`,
  searchInDescriptionsCheckbox: `input#isc`,
  noResultMessage: `.no-result`,
});
