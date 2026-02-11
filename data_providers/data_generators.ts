import { randomString } from "@pages/base_page/base_page";
import { getRandomNumber } from "../helpers/helper_functions";
import { UserDetails } from "./user_details";

export interface DateOfBirth {
  day: string;
  month: string;
  year: string;
}

export const generateUserData = (): Omit<UserDetails, "id" | "title"> => {
  const { day, month, year } = generateRandomDateOfBirth();
  return {
    name: "mithril",
    email: `user${randomString(6)}@testmail.com`,
    first_name: "mithril",
    birth_day: day,
    birth_month: month,
    birth_year: year,
    last_name: "guard",
    company: "mithrilguardqa",
    address1: "Sofia",
    address2: `address2${randomString(3)}`,
    country: "United States",
    state: "Arizona",
    city: "Tucson",
    zipcode: "85704",
    phone: randomString(10),
  };
};

export const generateRandomDateOfBirth = (): DateOfBirth => {
  const day = getRandomNumber(1, 31);
  let month: number;

  if (day >= 29) {
    const monthsExceptFeb = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    month = monthsExceptFeb[getRandomNumber(0, monthsExceptFeb.length - 1)];
  } else {
    month = getRandomNumber(1, 12);
  }

  const year = getRandomNumber(1930, 2025);

  return { day: day.toString(), month: month.toString(), year: year.toString() };
};
