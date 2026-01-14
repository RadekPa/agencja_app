import * as z from 'zod';
export const tblPersonLoginFindManyResultSchema = z.object({
  data: z.array(z.object({
  PersonID: z.number().int(),
  Login: z.string(),
  DateBegin: z.date().optional(),
  DateEnd: z.date().optional()
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