import { z } from "zod";

const brandSchema = z.object({
  id: z.number(),
  brand: z.string(),
});

// GET All Brands List response schema
export const getAllBrandsResponseSchema = z.object({
  responseCode: z.literal(200),
  brands: z.array(brandSchema).min(1),
});

// PUT To All Brands List response schema (405)
export const putBrandsListResponseSchema = z.object({
  responseCode: z.literal(405),
  message: z.string(),
});
