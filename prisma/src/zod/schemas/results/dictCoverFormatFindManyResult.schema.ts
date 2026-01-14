import * as z from 'zod';
export const dictCoverFormatFindManyResultSchema = z.object({
  data: z.array(z.object({
  CoverFormatID: z.number().int(),
  CoverFormatDesc: z.string(),
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