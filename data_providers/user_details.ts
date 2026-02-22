export interface UserDetails {
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

export const cartTestUser1Details: UserDetails = {
  ...defaultUserDetails,
  email: "cartUser1@gmail.com",
};

export const cartTestUser2Details: UserDetails = {
  ...defaultUserDetails,
  email: "cartUser2@gmail.com",
};

export const cartTestUser3Details: UserDetails = {
  ...defaultUserDetails,
  email: "cartUser3@gmail.com",
};

export const paymentTestUserDetails: UserDetails = {
  ...defaultUserDetails,
  email: "paymentUser@gmail.com",
};

export const productsTestUserDetails: UserDetails = {
  ...defaultUserDetails,
  email: "productsUser@gmail.com",
};

export const productsTestUser2Details: UserDetails = {
  ...defaultUserDetails,
  email: "productsUser2@gmail.com",
};

export interface UserAuth {
  email: string;
  details: UserDetails;
  authFile: string;
}

export const users: Record<string, UserAuth> = {
  default: {
    email: defaultUserDetails.email,
    details: defaultUserDetails,
    authFile: ".auth/defaultUserLogin.json",
  },
  cartUser1: {
    email: cartTestUser1Details.email,
    details: cartTestUser1Details,
    authFile: ".auth/cartUser1Login.json",
  },
  cartUser2: {
    email: cartTestUser2Details.email,
    details: cartTestUser2Details,
    authFile: ".auth/cartUser2Login.json",
  },
  cartUser3: {
    email: cartTestUser3Details.email,
    details: cartTestUser3Details,
    authFile: ".auth/cartUser3Login.json",
  },
  paymentUser1: {
    email: paymentTestUserDetails.email,
    details: paymentTestUserDetails,
    authFile: ".auth/paymentUser1Login.json",
  },
  productsUser1: {
    email: productsTestUserDetails.email,
    details: productsTestUserDetails,
    authFile: ".auth/productsUser1Login.json",
  },
  productsUser2: {
    email: productsTestUser2Details.email,
    details: productsTestUser2Details,
    authFile: ".auth/productsUser2Login.json",
  },
};
