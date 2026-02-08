import { z } from "zod";

// POST Verify Login with valid details response schema
export const verifyLoginResponseSchema = z.object({
  responseCode: z.literal(200),
  message: z.string(),
});

// POST Verify Login without email parameter response schema (400)
export const verifyLoginMissingParamResponseSchema = z.object({
  responseCode: z.literal(400),
  message: z.string(),
});

// DELETE To Verify Login response schema (405)
export const deleteVerifyLoginResponseSchema = z.object({
  responseCode: z.literal(405),
  message: z.string(),
});

// POST Verify Login with invalid details response schema (404)
export const verifyLoginInvalidResponseSchema = z.object({
  responseCode: z.literal(404),
  message: z.string(),
});

// POST Create Account response schema
export const createAccountResponseSchema = z.object({
  responseCode: z.literal(201),
  message: z.string(),
});

// DELETE Delete Account response schema
export const deleteAccountResponseSchema = z.object({
  responseCode: z.literal(200),
  message: z.string(),
});

// PUT Update Account response schema
export const updateAccountResponseSchema = z.object({
  responseCode: z.literal(200),
  message: z.string(),
});

// GET User Detail By Email response schema
export const getUserDetailByEmailResponseSchema = z.object({
  responseCode: z.literal(200),
  user: z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    title: z.string(),
    birth_day: z.string(),
    birth_month: z.string(),
    birth_year: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    company: z.string(),
    address1: z.string(),
    address2: z.string(),
    country: z.string(),
    state: z.string(),
    city: z.string(),
    zipcode: z.string(),
  }),
});
