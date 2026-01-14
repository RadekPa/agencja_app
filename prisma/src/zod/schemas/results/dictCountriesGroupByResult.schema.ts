import * as z from 'zod';
export const dictCountriesGroupByResultSchema = z.array(z.object({
  CountryID: z.number().int(),
  CountryDesc: z.string(),
  CountryPL: z.string(),
  Tax: z.number(),
  Code: z.string(),
  EU: z.string(),
  _count: z.object({
    CountryID: z.number(),
    CountryDesc: z.number(),
    CountryPL: z.number(),
    Tax: z.number(),
    Code: z.number(),
    EU: z.number()
  }).optional(),
  _sum: z.object({
    CountryID: z.number().nullable(),
    Tax: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    CountryID: z.number().nullable(),
    Tax: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    CountryID: z.number().int().nullable(),
    CountryDesc: z.string().nullable(),
    CountryPL: z.string().nullable(),
    Tax: z.number().nullable(),
    Code: z.string().nullable(),
    EU: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    CountryID: z.number().int().nullable(),
    CountryDesc: z.string().nullable(),
    CountryPL: z.string().nullable(),
    Tax: z.number().nullable(),
    Code: z.string().nullable(),
    EU: z.string().nullable()
  }).nullable().optional()
}));