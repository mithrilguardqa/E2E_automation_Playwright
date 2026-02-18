export const elements = Object.freeze({
  //Products page elements
  saleImage: `#sale_image`,
  searchInput: `#search_product`,
  submitSearchButton: `#submit_search`,

  //Accordion expand buttons
  womenAccordionExpandButton: `//*[@id='accordian']//a[@href="#Women"]`,
  menAccordionExpandButton: `//*[@id='accordian']//a[@href="#Men"]`,
  kidsAccordionExpandButton: `//*[@id='accordian']//a[@href="#Kids"]`,

  //Category buttons
  womenSectionDressButton: `//*[@id='Women']//a[text()='Dress ']`,
  womenSectionTopsButton: `//*[@id='Women']//a[text()='Tops ']`,
  womenSectionSareeButton: `//*[@id='Women']//a[text()='Saree ']`,
  menSectionTShirtButton: `//*[@id='Men']//*[text()='Tshirts ']`,
  menSectionJeansButton: `//*[@id='Men']//*[text()='Jeans ']`,
  kidsSectionBabyDressButton: `//*[@id='Kids']//*[text()='Dress ']`,
  kidsSectionBabyTShirtButton: `//*[@id='Kids']//*[text()='Tops & Shirts ']`,

  //Product details page elements
  productsPageTitle: `//h2[@class='title text-center']`,
  productsCardsContainers: `//*[@class='features_items']//*[@class='single-products']`,
  productsCardNames: `//*[@class='single-products']//div[@class='productinfo text-center']//p`,
  productsCardPrices: `//*[@class='single-products']//div[@class='productinfo text-center']//h2`,
});
