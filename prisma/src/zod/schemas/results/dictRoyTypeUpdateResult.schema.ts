import * as z from 'zod';
export const dictRoyTypeUpdateResultSchema = z.nullable(z.object({
  RoyTypeID: z.number(),
  AgrRightID: z.number().int().optional(),
  RoyTypeDesc: z.string(),
  tblAgrRights: z.unknown().optional()
}));