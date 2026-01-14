import * as z from 'zod';
export const dictPriceTypeFindUniqueResultSchema = z.nullable(z.object({
  PriceTypeID: z.number().int(),
  PriceTypeDesc: z.string().optional(),
  PriceTypePL: z.string().optional(),
  tblAgrRights: z.array(z.unknown())
}));