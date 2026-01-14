import * as z from 'zod';
export const tblAgrRightsAggregateResultSchema = z.object({  _count: z.object({
    AgrRightID: z.number(),
    AgrID: z.number(),
    RightID: z.number(),
    PriceTypeID: z.number(),
    RoyPriceTypeID: z.number(),
    RoyAccountIntervalID: z.number(),
    DistID: z.number(),
    dictRoyType: z.number(),
    tblAgreements: z.number(),
    dictDistributionType: z.number(),
    dictRightsForm: z.number(),
    dictRoyPriceType: z.number(),
    dictPriceType: z.number(),
    dictRoyAccountInterval: z.number(),
    tblRoyRates: z.number()
  }).optional(),
  _sum: z.object({
    AgrRightID: z.number().nullable(),
    AgrID: z.number().nullable(),
    RightID: z.number().nullable(),
    PriceTypeID: z.number().nullable(),
    RoyPriceTypeID: z.number().nullable(),
    RoyAccountIntervalID: z.number().nullable(),
    DistID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    AgrRightID: z.number().nullable(),
    AgrID: z.number().nullable(),
    RightID: z.number().nullable(),
    PriceTypeID: z.number().nullable(),
    RoyPriceTypeID: z.number().nullable(),
    RoyAccountIntervalID: z.number().nullable(),
    DistID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    AgrRightID: z.number().int().nullable(),
    AgrID: z.number().int().nullable(),
    RightID: z.number().int().nullable(),
    PriceTypeID: z.number().int().nullable(),
    RoyPriceTypeID: z.number().int().nullable(),
    RoyAccountIntervalID: z.number().int().nullable(),
    DistID: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    AgrRightID: z.number().int().nullable(),
    AgrID: z.number().int().nullable(),
    RightID: z.number().int().nullable(),
    PriceTypeID: z.number().int().nullable(),
    RoyPriceTypeID: z.number().int().nullable(),
    RoyAccountIntervalID: z.number().int().nullable(),
    DistID: z.number().int().nullable()
  }).nullable().optional()});