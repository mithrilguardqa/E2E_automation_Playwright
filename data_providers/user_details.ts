export interface UserDetails {
  id: number;
  name: string;
  email: string;
  title: string;
  birth_day: string;
  birth_month: string;
  birth_year: string;
  first_name: string;
  last_name: string;
  company: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  phone: string;
}

export const defaultUserDetails: UserDetails = {
  id: 1370861,
  name: "mithril",
  email: "mithrilguardqa@gmail.com",
  title: "", // mr or mrs
  birth_day: "1",
  birth_month: "6",
  birth_year: "1997",
  first_name: "mithril",
  last_name: "guard",
  company: "mithrilguardqa",
  address1: "Sofia",
  address2: "address2",
  country: "United States",
  state: "Arizona",
  city: "Tucson",
  zipcode: "85704",
  phone: "1234567890",
};
