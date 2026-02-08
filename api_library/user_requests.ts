import { APIRequestContext, APIResponse } from "@playwright/test";
import { EntryPoint } from "../constants/endpoints.js";
import config from "../env.config.js";

export type CreateAccountRequestBody = {
  name: string;
  email: string;
  password: string;
  title: "Mr" | "Mrs" | "Miss";
  birth_date: string;
  birth_month: string;
  birth_year: string;
  firstname: string;
  lastname: string;
  company: string;
  address1: string;
  address2: string;
  country: string;
  zipcode: string;
  state: string;
  city: string;
  mobile_number: string;
};

export type UpdateAccountRequestBody = CreateAccountRequestBody;

// API 7: POST To Verify Login with valid details
export const verifyLoginApiRequest = async (
  request: APIRequestContext,
  email: string,
  password: string
): Promise<APIResponse> => {
  return await request.post(`${config.apiURL}${EntryPoint.VerifyLogin}`, {
    form: { email, password },
  });
};

// API 8: POST To Verify Login without email parameter (expected 400)
export const verifyLoginWithoutEmailApiRequest = async (
  request: APIRequestContext,
  password: string
): Promise<APIResponse> => {
  return await request.post(`${config.apiURL}${EntryPoint.VerifyLogin}`, {
    form: { password },
  });
};

// API 9: DELETE To Verify Login (expected 405)
export const deleteVerifyLoginApiRequest = async (
  request: APIRequestContext
): Promise<APIResponse> => {
  return await request.delete(`${config.apiURL}${EntryPoint.VerifyLogin}`);
};

// API 10: POST To Verify Login with invalid details (expected 404)
export const verifyLoginInvalidApiRequest = async (
  request: APIRequestContext,
  email: string,
  password: string
): Promise<APIResponse> => {
  return await request.post(`${config.apiURL}${EntryPoint.VerifyLogin}`, {
    form: { email, password },
  });
};

// API 11: POST To Create/Register User Account
export const createAccountApiRequest = async (
  request: APIRequestContext,
  body: CreateAccountRequestBody
): Promise<APIResponse> => {
  return await request.post(`${config.apiURL}${EntryPoint.CreateAccount}`, {
    form: body as unknown as Record<string, string>,
  });
};

// API 12: DELETE METHOD To Delete User Account
export const deleteAccountApiRequest = async (
  request: APIRequestContext,
  email: string,
  password: string
): Promise<APIResponse> => {
  return await request.delete(`${config.apiURL}${EntryPoint.DeleteAccount}`, {
    form: { email, password },
  });
};

// API 13: PUT METHOD To Update User Account
export const updateAccountApiRequest = async (
  request: APIRequestContext,
  body: UpdateAccountRequestBody
): Promise<APIResponse> => {
  return await request.put(`${config.apiURL}${EntryPoint.UpdateAccount}`, {
    form: body as unknown as Record<string, string>,
  });
};

// API 14: GET user account detail by email
export const getUserDetailByEmailApiRequest = async (
  request: APIRequestContext,
  email: string
): Promise<APIResponse> => {
  return await request.get(
    `${config.apiURL}${EntryPoint.GetUserDetailByEmail}?email=${email}`
  );
};
