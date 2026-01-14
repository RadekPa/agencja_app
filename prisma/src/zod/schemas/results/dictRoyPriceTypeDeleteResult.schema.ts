import * as z from 'zod';
export const dictRoyPriceTypeDeleteResultSchema = z.nullable(z.object({
  RoyPriceTypeID: z.number().int(),
  RoyPriceTypeDesc: z.string(),
  RoyPriceTypePL: z.string().optional(),
  tblAgrRights: z.array(z.unknown())
}));