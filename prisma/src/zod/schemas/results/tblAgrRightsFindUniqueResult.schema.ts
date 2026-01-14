import * as z from 'zod';
export const tblAgrRightsFindUniqueResultSchema = z.nullable(z.object({
  AgrRightID: z.number().int(),
  AgrID: z.number().int().optional(),
  RightID: z.number().int().optional(),
  PriceTypeID: z.number().int().optional(),
  RoyPriceTypeID: z.number().int().optional(),
  RoyAccountIntervalID: z.number().int().optional(),
  DistID: z.number().int().optional(),
  dictRoyType: z.array(z.unknown()),
  tblAgreements: z.unknown().optional(),
  dictDistributionType: z.unknown().optional(),
  dictRightsForm: z.unknown().optional(),
  dictRoyPriceType: z.unknown().optional(),
  dictPriceType: z.unknown().optional(),
  dictRoyAccountInterval: z.unknown().optional(),
  tblRoyRates: z.array(z.unknown())
}));