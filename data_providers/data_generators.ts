import { randomString } from "@pages/base_page/base_page";

export const generateTestEmail = (): string => {
  return `user${randomString(6)}@testmail.com`;
};
