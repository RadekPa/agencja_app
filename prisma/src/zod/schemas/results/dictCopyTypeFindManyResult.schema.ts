import * as z from 'zod';
export const dictCopyTypeFindManyResultSchema = z.object({
  data: z.array(z.object({
  CopyTypeID: z.number().int(),
  CopyType: z.string().optional(),
  tblSubmissions: z.array(z.unknown()),
  tblTitEvents: z.array(z.unknown())
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