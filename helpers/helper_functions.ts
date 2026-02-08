import { expect } from "@playwright/test";
import { ZodSchema } from "zod";

export const getRandomArrayIndex = (array: any[]): number => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
};

/**
 * Get a random property from an object
 * @param obj - (Required) The object to get a random property from
 * @param key - (Optional) The key of the property we want to get
 * @returns The value of the random property or the value of the property with the key
 */
export const getRandomObjectProperty = (obj: any, key?: string): any => {
  let objectKeys: string[] = Object.keys(obj);
  if (key) {
    const value = obj[objectKeys[getRandomArrayIndex(objectKeys)]];
    return value[key];
  } else {
    return obj[objectKeys[getRandomArrayIndex(objectKeys)]];
  }
};

/**
 * Expects the response body to match the schema
 * @param responseBody - The response body to validate
 * @param schema - The schema to validate the response body against
 * @returns void
 */
export const expectToMatchSchema = async (
  responseBody: any,
  schema: ZodSchema
): Promise<void> => {
  let responseData;

  if (typeof responseBody.json === "function") {
    responseData = await responseBody.json();
  } else {
    responseData = responseBody;
  }

  const result = schema.safeParse(responseData);

  if (!result.success) {
    const errorMessages = result.error.issues
      .map((issue) => {
        const path = issue.path.length > 0 ? `${issue.path.join(".")}: ` : "";
        return `${path}${issue.message}`;
      })
      .join(", ");

    throw new Error(`Schema validation failed: ${errorMessages}`);
  }
};

/**
 * Generate a unique email address for testing
 * @returns A unique email string
 */
export const generateTestEmail = (): string => {
  const timestamp = Date.now();
  return `testuser_${timestamp}@testmail.com`;
};

/**
 * Generate a random password
 * @param length - length of the password (default 12)
 * @returns A random password string
 */
export const generateTestPassword = (length: number = 12): string => {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};
