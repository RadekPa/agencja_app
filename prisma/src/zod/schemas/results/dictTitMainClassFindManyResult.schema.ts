import * as z from 'zod';
export const dictTitMainClassFindManyResultSchema = z.object({
  data: z.array(z.object({
  ClassCode: z.string(),
  ClassDesc: z.string().optional(),
  dictTitSubClass: z.array(z.unknown()),
  tblMailingLists: z.array(z.unknown()),
  tblTitles: z.array(z.unknown())
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