import * as z from 'zod';
export const dictRightsFormFindManyResultSchema = z.object({
  data: z.array(z.object({
  RightFormID: z.number().int(),
  RightFormDesc: z.string(),
  RightFormPL: z.string().optional(),
  RightFormAbbPL: z.string().optional(),
  RightFormAbbEN: z.string().optional(),
  tblAgrRights: z.array(z.unknown())
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