import * as z from 'zod';
export const dictPriceTypeAggregateResultSchema = z.object({  _count: z.object({
    PriceTypeID: z.number(),
    PriceTypeDesc: z.number(),
    PriceTypePL: z.number(),
    tblAgrRights: z.number()
  }).optional(),
  _sum: z.object({
    PriceTypeID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    PriceTypeID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    PriceTypeID: z.number().int().nullable(),
    PriceTypeDesc: z.string().nullable(),
    PriceTypePL: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    PriceTypeID: z.number().int().nullable(),
    PriceTypeDesc: z.string().nullable(),
    PriceTypePL: z.string().nullable()
  }).nullable().optional()});