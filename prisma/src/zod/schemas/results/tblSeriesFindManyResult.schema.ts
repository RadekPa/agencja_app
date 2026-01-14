import * as z from 'zod';
export const tblSeriesFindManyResultSchema = z.object({
  data: z.array(z.object({
  SeriesID: z.number().int(),
  CustID: z.number().int().optional(),
  SeriesFullName: z.string().optional(),
  SeriesShortName: z.string().optional(),
  tblCustomers: z.unknown().optional()
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