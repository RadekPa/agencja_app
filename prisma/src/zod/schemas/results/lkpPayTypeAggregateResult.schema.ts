import * as z from 'zod';
export const lkpPayTypeAggregateResultSchema = z.object({  _count: z.object({
    PayTypeID: z.number(),
    Description: z.number(),
    DescriptionPL: z.number()
  }).optional(),
  _sum: z.object({
    PayTypeID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    PayTypeID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    PayTypeID: z.number().int().nullable(),
    Description: z.string().nullable(),
    DescriptionPL: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    PayTypeID: z.number().int().nullable(),
    Description: z.string().nullable(),
    DescriptionPL: z.string().nullable()
  }).nullable().optional()});