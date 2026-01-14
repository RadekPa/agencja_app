import * as z from 'zod';
export const dictRoyTypeFindManyResultSchema = z.object({
  data: z.array(z.object({
  RoyTypeID: z.number(),
  AgrRightID: z.number().int().optional(),
  RoyTypeDesc: z.string(),
  tblAgrRights: z.unknown().optional()
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