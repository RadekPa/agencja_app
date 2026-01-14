import * as z from 'zod';
export const dictCountriesFindManyResultSchema = z.object({
  data: z.array(z.object({
  CountryID: z.number().int(),
  CountryDesc: z.string().optional(),
  CountryPL: z.string().optional(),
  Tax: z.number().optional(),
  Code: z.string().optional(),
  EU: z.string().optional()
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