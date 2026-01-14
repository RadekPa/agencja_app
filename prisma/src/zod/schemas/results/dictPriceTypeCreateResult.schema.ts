import * as z from 'zod';
export const dictPriceTypeCreateResultSchema = z.object({
  PriceTypeID: z.number().int(),
  PriceTypeDesc: z.string().optional(),
  PriceTypePL: z.string().optional(),
  tblAgrRights: z.array(z.unknown())
});