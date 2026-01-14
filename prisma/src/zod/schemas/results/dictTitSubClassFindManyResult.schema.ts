import * as z from 'zod';
export const dictTitSubClassFindManyResultSchema = z.object({
  data: z.array(z.object({
  SubClassCode: z.string(),
  ClassCode: z.string().optional(),
  SubClassDesc: z.string().optional(),
  dictTitMainClass: z.unknown().optional(),
  tblMailingLists: z.array(z.unknown()),
  tblTitSubClass: z.array(z.unknown())
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