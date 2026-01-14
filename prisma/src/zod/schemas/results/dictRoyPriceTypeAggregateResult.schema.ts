import * as z from 'zod';
export const dictRoyPriceTypeAggregateResultSchema = z.object({  _count: z.object({
    RoyPriceTypeID: z.number(),
    RoyPriceTypeDesc: z.number(),
    RoyPriceTypePL: z.number(),
    tblAgrRights: z.number()
  }).optional(),
  _sum: z.object({
    RoyPriceTypeID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    RoyPriceTypeID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    RoyPriceTypeID: z.number().int().nullable(),
    RoyPriceTypeDesc: z.string().nullable(),
    RoyPriceTypePL: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    RoyPriceTypeID: z.number().int().nullable(),
    RoyPriceTypeDesc: z.string().nullable(),
    RoyPriceTypePL: z.string().nullable()
  }).nullable().optional()});