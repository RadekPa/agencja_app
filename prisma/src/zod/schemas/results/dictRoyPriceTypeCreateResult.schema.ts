import * as z from 'zod';
export const dictRoyPriceTypeCreateResultSchema = z.object({
  RoyPriceTypeID: z.number().int(),
  RoyPriceTypeDesc: z.string(),
  RoyPriceTypePL: z.string().optional(),
  tblAgrRights: z.array(z.unknown())
});