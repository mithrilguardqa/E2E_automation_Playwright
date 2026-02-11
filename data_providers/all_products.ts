// Sample data file -> in real life, this would be in a database and will scrape it before the test run
export const allBrands = {
  brands: Object.freeze({
    polo: {
      name: "Polo",
      count: 6,
      items: {
        "Blue Top": { price: 500, category: "Women > Tops" },
        "Fancy Green Top": { price: 700, category: "Women > Tops" },
        "Green Side Placket Detail T-Shirt": { price: 1000, category: "Men > Tshirts" },
        "Premium Polo T-Shirts": { price: 1500, category: "Men > Tshirts" },
        "Soft Stretch Jeans": { price: 799, category: "Men > Jeans" },
        "Grunt Blue Slim Fit Jeans": { price: 1400, category: "Men > Jeans" },
      },
    },
    hm: {
      name: "H&M",
      count: 5,
      items: {
        "Men Tshirt": { price: 400, category: "Men > Tshirts" },
        "Summer White Top": { price: 400, category: "Women > Tops" },
        "Pure Cotton V-Neck T-Shirt": { price: 1299, category: "Men > Tshirts" },
        "Pure Cotton Neon Green Tshirt": { price: 850, category: "Men > Tshirts" },
        "Regular Fit Straight Jeans": { price: 1200, category: "Men > Jeans" },
      },
    },
    madame: {
      name: "Madame",
      count: 5,
      items: {
        "Sleeveless Dress": { price: 1000, category: "Women > Dress" },
        "Stylish Dress": { price: 1500, category: "Women > Dress" },
        "Madame Top For Women": { price: 1000, category: "Women > Tops" },
        "Rose Pink Embroidered Maxi Dress": { price: 2300, category: "Women > Dress" },
        "Beautiful Peacock Blue Cotton Linen Saree": {
          price: 5000,
          category: "Women > Saree",
        },
      },
    },
    mastHarbour: {
      name: "Mast & Harbour",
      count: 3,
      items: {
        "Winter Top": { price: 600, category: "Women > Tops" },
        "Lace Top For Women": { price: 1400, category: "Women > Tops" },
        "GRAPHIC DESIGN MEN T SHIRT - BLUE": { price: 1389, category: "Men > Tshirts" },
      },
    },
    babyhug: {
      name: "Babyhug",
      count: 4,
      items: {
        "Sleeves Printed Top - White": { price: 499, category: "Kids > Tops & Shirts" },
        "Half Sleeves Top Schiffli Detailing - Pink": { price: 359, category: "Kids > Tops & Shirts" },
        "Printed Off Shoulder Top - White": { price: 315, category: "Kids > Tops & Shirts" },
        "Sleeves Top and Short - Blue & Pink": { price: 478, category: "Kids > Dress" },
      },
    },
    allenSollyJunior: {
      name: "Allen Solly Junior",
      count: 3,
      items: {
        "Frozen Tops For Kids": { price: 278, category: "Kids > Tops & Shirts" },
        "Sleeveless Unicorn Patch Gown - Pink": { price: 1050, category: "Kids > Dress" },
        "Colour Blocked Shirt – Sky Blue": { price: 849, category: "Kids > Tops & Shirts" },
      },
    },
    kookieKids: {
      name: "Kookie Kids",
      count: 3,
      items: {
        "Full Sleeves Top Cherry - Pink": { price: 679, category: "Kids > Tops & Shirts" },
        "Little Girls Mr. Panda Shirt": { price: 1200, category: "Kids > Tops & Shirts" },
        "Cotton Mull Embroidered Dress": { price: 1190, category: "Kids > Dress" },
      },
    },
    biba: {
      name: "Biba",
      count: 5,
      items: {
        "Blue Cotton Indie Mickey Dress": { price: 1530, category: "Kids > Dress" },
        "Long Maxi Tulle Fancy Dress Up Outfits -Pink": { price: 1600, category: "Kids > Dress" },
        "Sleeveless Unicorn Print Fit & Flare Net Dress - Multi": { price: 1100, category: "Kids > Dress" },
        "Cotton Silk Hand Block Print Saree": { price: 3000, category: "Women > Saree" },
        "Rust Red Linen Saree": { price: 3500, category: "Women > Saree" },
      },
    },
  }),
} as const;
