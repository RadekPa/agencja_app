import * as z from 'zod';
export const dictCountries_oldFindUniqueResultSchema = z.nullable(z.object({
  CountryID: z.number().int(),
  CountryDesc: z.string(),
  CountryPL: z.string().optional(),
  Tax: z.number().optional(),
  Code: z.string().optional(),
  EU: z.string().optional(),
  dictStates: z.array(z.unknown()),
  tblAgreements: z.array(z.unknown())
}));