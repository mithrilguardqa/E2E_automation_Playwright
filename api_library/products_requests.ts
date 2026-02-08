import { APIRequestContext, APIResponse } from "@playwright/test";
import { EntryPoint } from "../constants/endpoints.js";
import config from "../env.config.js";

// API 1: GET All Products List
export const getAllProductsApiRequest = async (
  request: APIRequestContext
): Promise<APIResponse> => {
  return await request.get(`${config.apiURL}${EntryPoint.ProductsList}`);
};

// API 2: POST To All Products List (expected 405)
export const postToProductsListApiRequest = async (
  request: APIRequestContext
): Promise<APIResponse> => {
  return await request.post(`${config.apiURL}${EntryPoint.ProductsList}`);
};

// API 5: POST To Search Product
export const searchProductApiRequest = async (
  request: APIRequestContext,
  searchProduct: string
): Promise<APIResponse> => {
  return await request.post(`${config.apiURL}${EntryPoint.SearchProduct}`, {
    form: { search_product: searchProduct },
  });
};

// API 6: POST To Search Product without parameter (expected 400)
export const searchProductWithoutParamApiRequest = async (
  request: APIRequestContext
): Promise<APIResponse> => {
  return await request.post(`${config.apiURL}${EntryPoint.SearchProduct}`);
};
