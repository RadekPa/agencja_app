import * as z from 'zod';
export const dictStatesUpdateResultSchema = z.nullable(z.object({
  StateID: z.number().int(),
  CountryID: z.number().int().optional(),
  StateAbb: z.string(),
  StateName: z.string(),
  dictCountries_old: z.unknown().optional(),
  tblCustomers: z.array(z.unknown())
}));