import * as z from 'zod';
export const dictAdvTermFindManyResultSchema = z.object({
  data: z.array(z.object({
  AdvTermId: z.number().int(),
  AdvTermDesc: z.string().optional(),
  AdvTermPL: z.string().optional()
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