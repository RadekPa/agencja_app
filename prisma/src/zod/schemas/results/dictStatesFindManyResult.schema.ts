import * as z from 'zod';
export const dictStatesFindManyResultSchema = z.object({
  data: z.array(z.object({
  StateID: z.number().int(),
  CountryID: z.number().int().optional(),
  StateAbb: z.string(),
  StateName: z.string(),
  dictCountries_old: z.unknown().optional(),
  tblCustomers: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});