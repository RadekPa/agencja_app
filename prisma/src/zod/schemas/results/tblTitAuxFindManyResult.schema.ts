import * as z from 'zod';
export const tblTitAuxFindManyResultSchema = z.object({
  data: z.array(z.object({
  TitleID: z.number().int(),
  CopyrightLine: z.string().optional(),
  tblTitles: z.unknown()
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