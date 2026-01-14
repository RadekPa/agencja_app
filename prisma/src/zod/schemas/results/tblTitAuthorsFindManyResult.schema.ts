import * as z from 'zod';
export const tblTitAuthorsFindManyResultSchema = z.object({
  data: z.array(z.object({
  AuthorID: z.number().int(),
  TitleID: z.number().int(),
  Main: z.number().int().optional(),
  Lp: z.number().int(),
  tblAuthors: z.unknown(),
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