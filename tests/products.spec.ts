import { test } from "@playwright/test";
import {
  getAllProductsByCategory,
  Product,
  ProductCategory,
  products,
  UserType,
} from "@data_providers/products";
import { acceptCookies, blockAds, navigateToPage } from "@pages/base_page/base_page";
import { ProductDetailsPage, ProductsPage } from "@pages";
import { getRandomObjectProperty } from "helpers/helper_functions";

test.describe("Products browsing", () => {
  test.beforeEach(async ({ page }) => {
    await blockAds(page);
    await navigateToPage(page, "homepage");
    await acceptCookies(page);
  });

  test("Verify user can browse products", async ({ page }) => {
    let breadcrumbText: string = "";
    let womenDressCategory: string = `Category: ${UserType.Women} > ${ProductCategory.Dress}`;
    let menTshirtCategory: string = `Category: ${UserType.Men} > ${ProductCategory.Tshirts}`;

    const {
      name: womenDressName,
      price: womenDressPrice,
      brand: womenDressBrand,
    } = products[UserType.Women][ProductCategory.Dress].find(
      (product) => product.name === "Sleeveless Dress",
    )!;

    const womenDressCount: number = products[UserType.Women][ProductCategory.Dress].length;

    await test.step("Navigate to products page", async () => {
      await navigateToPage(page, "products");
    });

    await test.step("Verify user is on products page", async () => {
      await ProductsPage.verifyUserIsOnCorrectProductsPage(page);
    });

    await test.step("Navigate user women dress category and browse products", async () => {
      await ProductsPage.navigateThroughProductsPages(page, UserType.Women, ProductCategory.Dress);
    });

    await test.step("Verify correct number and names of products are displayed", async () => {
      await ProductsPage.verifyUserIsOnCorrectProductsPage(
        page,
        UserType.Women,
        ProductCategory.Dress,
      );
    });

    await test.step("Verify breadcrumb navigation", async () => {
      breadcrumbText = "Products Women > Dress";
      await ProductsPage.verifyBreadCrumbNav(page, breadcrumbText);
    });

    await test.step("Verify correct number of products are displayed", async () => {
      await ProductsPage.verifyProductsCount(page, womenDressCount);
    });

    await test.step("Click on view product button", async () => {
      await ProductsPage.clickViewProductButton(page, womenDressName);
    });

    await test.step("Verify product details", async () => {
      await ProductDetailsPage.verifyProductDetails(
        page,
        womenDressName,
        womenDressCategory,
        `Rs. ${womenDressPrice}`,
        `Brand: ${womenDressBrand}`,
      );
    });
  });

  test("Verify user can search specific product", async ({ page }) => {
    let searchQuery: string = "jeans";
    const jeansProductsCount: number = getAllProductsByCategory(ProductCategory.Jeans).length;
    const randomJeansProduct: Product = getRandomObjectProperty(
      getAllProductsByCategory(ProductCategory.Jeans),
    );
    const {
      name: randomJeansProductName,
      price: randomJeansProductPrice,
      brand: randomJeansProductBrand,
    } = randomJeansProduct;
    let jeansProductCategory: string = `Category: ${UserType.Men} > ${ProductCategory.Jeans}`;
    let jeansProductPrice: string = `Rs. ${randomJeansProductPrice}`;
    let jeansProductBrand: string = `Brand: ${randomJeansProductBrand}`;

    await test.step("Navigate to products page", async () => {
      await navigateToPage(page, "products");
    });

    await test.step("Verify user is on products page", async () => {
      await ProductsPage.verifyUserIsOnCorrectProductsPage(page);
    });

    await test.step("Search for specific product", async () => {
      await ProductsPage.searchProduct(page, searchQuery);
    });

    await test.step("Verify URL contains search query", async () => {
      await page.waitForURL(`**/products?search=${searchQuery}`);
    });

    await test.step("Verify correct number of products are displayed", async () => {
      await ProductsPage.verifyProductsCount(page, jeansProductsCount);
    });

    await test.step("Verify the correct product names are displayed after the search", async () => {
      await ProductsPage.verifyProductNames(page, searchQuery);
    });

    await test.step("Click on view product button", async () => {
      await ProductsPage.clickViewProductButton(page, randomJeansProductName);
    });

    await test.step("Verify product details", async () => {
      await ProductDetailsPage.verifyProductDetails(
        page,
        randomJeansProductName,
        jeansProductCategory,
        jeansProductPrice,
        jeansProductBrand,
      );
    });
  });
});
