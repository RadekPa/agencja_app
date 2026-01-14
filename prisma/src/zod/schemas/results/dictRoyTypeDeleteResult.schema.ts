import * as z from 'zod';
export const dictRoyTypeDeleteResultSchema = z.nullable(z.object({
  RoyTypeID: z.number(),
  AgrRightID: z.number().int().optional(),
  RoyTypeDesc: z.string(),
  tblAgrRights: z.unknown().optional()
}));