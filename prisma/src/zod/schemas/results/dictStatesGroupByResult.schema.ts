import * as z from 'zod';
export const dictStatesGroupByResultSchema = z.array(z.object({
  StateID: z.number().int(),
  CountryID: z.number().int(),
  StateAbb: z.string(),
  StateName: z.string(),
  _count: z.object({
    StateID: z.number(),
    CountryID: z.number(),
    StateAbb: z.number(),
    StateName: z.number(),
    dictCountries_old: z.number(),
    tblCustomers: z.number()
  }).optional(),
  _sum: z.object({
    StateID: z.number().nullable(),
    CountryID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    StateID: z.number().nullable(),
    CountryID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    StateID: z.number().int().nullable(),
    CountryID: z.number().int().nullable(),
    StateAbb: z.string().nullable(),
    StateName: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    StateID: z.number().int().nullable(),
    CountryID: z.number().int().nullable(),
    StateAbb: z.string().nullable(),
    StateName: z.string().nullable()
  }).nullable().optional()
}));