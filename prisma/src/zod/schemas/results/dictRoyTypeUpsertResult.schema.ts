import * as z from 'zod';
export const dictRoyTypeUpsertResultSchema = z.object({
  RoyTypeID: z.number(),
  AgrRightID: z.number().int().optional(),
  RoyTypeDesc: z.string(),
  tblAgrRights: z.unknown().optional()
});