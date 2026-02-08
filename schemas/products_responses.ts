import { z } from "zod";

const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.string(),
  brand: z.string(),
  category: z.object({
    usertype: z.object({
      usertype: z.string(),
    }),
    category: z.string(),
  }),
});

// GET All Products List response schema
export const getAllProductsResponseSchema = z.object({
  responseCode: z.literal(200),
  products: z.array(productSchema).min(1),
});

// POST To All Products List response schema (405)
export const postProductsListResponseSchema = z.object({
  responseCode: z.literal(405),
  message: z.string(),
});

// POST Search Product response schema
export const searchProductResponseSchema = z.object({
  responseCode: z.literal(200),
  products: z.array(productSchema),
});

// POST Search Product without parameter response schema (400)
export const searchProductMissingParamResponseSchema = z.object({
  responseCode: z.literal(400),
  message: z.string(),
});
