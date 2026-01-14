import * as z from 'zod';
export const dictRoyAccountIntervalGroupByResultSchema = z.array(z.object({
  RoyAccountIntervalID: z.number().int(),
  RoyAccountIntervalDesc: z.string(),
  IntervalAbb: z.string(),
  _count: z.object({
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
  }).nullable().optional()
}));