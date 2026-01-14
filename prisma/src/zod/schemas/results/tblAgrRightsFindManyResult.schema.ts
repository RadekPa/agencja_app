import * as z from 'zod';
export const tblAgrRightsFindManyResultSchema = z.object({
  data: z.array(z.object({
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