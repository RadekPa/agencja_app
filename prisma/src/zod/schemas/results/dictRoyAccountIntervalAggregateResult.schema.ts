import * as z from 'zod';
export const dictRoyAccountIntervalAggregateResultSchema = z.object({  _count: z.object({
    RoyAccountIntervalID: z.number(),
    RoyAccountIntervalDesc: z.number(),
    IntervalAbb: z.number(),
    tblAgrRights: z.number()
  }).optional(),
  _sum: z.object({
    RoyAccountIntervalID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    RoyAccountIntervalID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    RoyAccountIntervalID: z.number().int().nullable(),
    RoyAccountIntervalDesc: z.string().nullable(),
    IntervalAbb: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    RoyAccountIntervalID: z.number().int().nullable(),
    RoyAccountIntervalDesc: z.string().nullable(),
    IntervalAbb: z.string().nullable()
  }).nullable().optional()});