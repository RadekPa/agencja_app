import * as z from 'zod';
export const tblTitSubClassFindManyResultSchema = z.object({
  data: z.array(z.object({
  SubClassCode: z.string(),
  TitleID: z.number().int(),
  tblTitles: z.unknown(),
  dictTitSubClass: z.unknown()
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