import * as z from 'zod';
export const dictMatTypeFindManyResultSchema = z.object({
  data: z.array(z.object({
  MatTypeID: z.number().int(),
  MatTypeDesc: z.string(),
  MatTypeDescPL: z.string().optional()
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