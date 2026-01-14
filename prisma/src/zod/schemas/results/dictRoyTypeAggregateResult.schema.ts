import * as z from 'zod';
export const dictRoyTypeAggregateResultSchema = z.object({  _count: z.object({
    RoyTypeID: z.number(),
    AgrRightID: z.number(),
    RoyTypeDesc: z.number(),
    tblAgrRights: z.number()
  }).optional(),
  _sum: z.object({
    RoyTypeID: z.number().nullable(),
    AgrRightID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    RoyTypeID: z.number().nullable(),
    AgrRightID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    RoyTypeID: z.number().nullable(),
    AgrRightID: z.number().int().nullable(),
    RoyTypeDesc: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    RoyTypeID: z.number().nullable(),
    AgrRightID: z.number().int().nullable(),
    RoyTypeDesc: z.string().nullable()
  }).nullable().optional()});