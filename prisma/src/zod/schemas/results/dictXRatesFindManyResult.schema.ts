import * as z from 'zod';
export const dictXRatesFindManyResultSchema = z.object({
  data: z.array(z.object({
  CurrDate: z.date(),
  CurrID: z.string(),
  XRate: z.number()
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