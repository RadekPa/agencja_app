import * as z from 'zod';
export const ArTypeFindManyResultSchema = z.object({
  data: z.array(z.object({
  ArType: z.string(),
  ArTypeDescription: z.string().optional(),
  ArTypeDescriptionPL: z.string().optional()
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