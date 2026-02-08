import { APIRequestContext, APIResponse } from "@playwright/test";
import { EntryPoint } from "../constants/endpoints.js";
import config from "../env.config.js";

// API 3: GET All Brands List
export const getAllBrandsApiRequest = async (
  request: APIRequestContext
): Promise<APIResponse> => {
  return await request.get(`${config.apiURL}${EntryPoint.BrandsList}`);
};

// API 4: PUT To All Brands List (expected 405)
export const putToBrandsListApiRequest = async (
  request: APIRequestContext
): Promise<APIResponse> => {
  return await request.put(`${config.apiURL}${EntryPoint.BrandsList}`);
};
