import * as z from 'zod';
export const dictCountriesDeleteResultSchema = z.nullable(z.object({
  CountryID: z.number().int(),
  CountryDesc: z.string().optional(),
  CountryPL: z.string().optional(),
  Tax: z.number().optional(),
  Code: z.string().optional(),
  EU: z.string().optional()
}));