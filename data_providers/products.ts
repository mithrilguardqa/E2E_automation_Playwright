export enum Brand {
  Polo = "Polo",
  HM = "H&M",
  Madame = "Madame",
  MastHarbour = "Mast & Harbour",
  Babyhug = "Babyhug",
  AllenSollyJunior = "Allen Solly Junior",
  KookieKids = "Kookie Kids",
  Biba = "Biba",
}

export enum UserType {
  Men = "Men",
  Women = "Women",
  Kids = "Kids",
}

export enum ProductCategory {
  Tshirts = "Tshirts",
  Jeans = "Jeans",
  Dress = "Dress",
  Saree = "Saree",
  Tops = "Tops",
  TopsAndShirts = "Tops & Shirts",
}

export const allowedCategories = {
  [UserType.Men]: [ProductCategory.Tshirts, ProductCategory.Jeans] as const,
  [UserType.Women]: [ProductCategory.Tops, ProductCategory.Dress, ProductCategory.Saree] as const,
  [UserType.Kids]: [ProductCategory.TopsAndShirts, ProductCategory.Dress] as const,
} as const;

export type AllowedCategory<U extends UserType> = (typeof allowedCategories)[U][number];

export interface Product {
  name: string;
  price: number;
  brand: Brand;
}

export interface WholeSectionProducts {
  [UserType.Men]: {
    [ProductCategory.Tshirts]: Product[];
    [ProductCategory.Jeans]: Product[];
  };
  [UserType.Women]: {
    [ProductCategory.Tops]: Product[];
    [ProductCategory.Dress]: Product[];
    [ProductCategory.Saree]: Product[];
  };
  [UserType.Kids]: {
    [ProductCategory.TopsAndShirts]: Product[];
    [ProductCategory.Dress]: Product[];
  };
}

export const getAllProductsByCategory = (category: ProductCategory): Product[] => {
  return Object.values(products).flatMap((userCategories) =>
    category in userCategories ? (userCategories as Record<string, Product[]>)[category] : [],
  );
};

export const products: WholeSectionProducts = {
  [UserType.Men]: {
    [ProductCategory.Tshirts]: [
      { name: "Green Side Placket Detail T-Shirt", price: 1000, brand: Brand.Polo },
      { name: "Premium Polo T-Shirts", price: 1500, brand: Brand.Polo },
      { name: "Men Tshirt", price: 400, brand: Brand.HM },
      { name: "Pure Cotton V-Neck T-Shirt", price: 1299, brand: Brand.HM },
      { name: "Pure Cotton Neon Green Tshirt", price: 850, brand: Brand.HM },
      { name: "GRAPHIC DESIGN MEN T SHIRT - BLUE", price: 1389, brand: Brand.MastHarbour },
    ],
    [ProductCategory.Jeans]: [
      { name: "Soft Stretch Jeans", price: 799, brand: Brand.Polo },
      { name: "Grunt Blue Slim Fit Jeans", price: 1400, brand: Brand.Polo },
      { name: "Regular Fit Straight Jeans", price: 1200, brand: Brand.HM },
    ],
  },

  [UserType.Women]: {
    [ProductCategory.Tops]: [
      { name: "Blue Top", price: 500, brand: Brand.Polo },
      { name: "Fancy Green Top", price: 700, brand: Brand.Polo },
      { name: "Summer White Top", price: 400, brand: Brand.HM },
      { name: "Madame Top For Women", price: 1000, brand: Brand.Madame },
      { name: "Winter Top", price: 600, brand: Brand.MastHarbour },
      { name: "Lace Top For Women", price: 1400, brand: Brand.MastHarbour },
    ],
    [ProductCategory.Dress]: [
      { name: "Sleeveless Dress", price: 1000, brand: Brand.Madame },
      { name: "Stylish Dress", price: 1500, brand: Brand.Madame },
      { name: "Rose Pink Embroidered Maxi Dress", price: 2300, brand: Brand.Madame },
    ],
    [ProductCategory.Saree]: [
      { name: "Beautiful Peacock Blue Cotton Linen Saree", price: 5000, brand: Brand.Madame },
      { name: "Cotton Silk Hand Block Print Saree", price: 3000, brand: Brand.Biba },
      { name: "Rust Red Linen Saree", price: 3500, brand: Brand.Biba },
    ],
  },

  [UserType.Kids]: {
    [ProductCategory.TopsAndShirts]: [
      { name: "Sleeves Printed Top - White", price: 499, brand: Brand.Babyhug },
      { name: "Half Sleeves Top Schiffli Detailing - Pink", price: 359, brand: Brand.Babyhug },
      { name: "Printed Off Shoulder Top - White", price: 315, brand: Brand.Babyhug },
      { name: "Frozen Tops For Kids", price: 278, brand: Brand.AllenSollyJunior },
      { name: "Colour Blocked Shirt – Sky Blue", price: 849, brand: Brand.AllenSollyJunior },
      { name: "Full Sleeves Top Cherry - Pink", price: 679, brand: Brand.KookieKids },
      { name: "Little Girls Mr. Panda Shirt", price: 1200, brand: Brand.KookieKids },
    ],
    [ProductCategory.Dress]: [
      { name: "Sleeves Top and Short - Blue & Pink", price: 478, brand: Brand.Babyhug },
      { name: "Sleeveless Unicorn Patch Gown - Pink", price: 1050, brand: Brand.AllenSollyJunior },
      { name: "Cotton Mull Embroidered Dress", price: 1190, brand: Brand.KookieKids },
      { name: "Blue Cotton Indie Mickey Dress", price: 1530, brand: Brand.Biba },
      { name: "Long Maxi Tulle Fancy Dress Up Outfits -Pink", price: 1600, brand: Brand.Biba },
      {
        name: "Sleeveless Unicorn Print Fit & Flare Net Dress - Multi",
        price: 1100,
        brand: Brand.Biba,
      },
    ],
  },
};

export const getRandomProduct = (products: Product[]): Product => {
  return products[Math.floor(Math.random() * products.length)];
};
