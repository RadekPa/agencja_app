import * as z from 'zod';
export const dictAdvTypeAggregateResultSchema = z.object({  _count: z.object({
    AdvTypeId: z.number(),
    AdvTypeDesc: z.number(),
    AdvTypeDescPL: z.number()
  }).optional(),
  _sum: z.object({
    AdvTypeId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    AdvTypeId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    AdvTypeId: z.number().int().nullable(),
    AdvTypeDesc: z.string().nullable(),
    AdvTypeDescPL: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    AdvTypeId: z.number().int().nullable(),
    AdvTypeDesc: z.string().nullable(),
    AdvTypeDescPL: z.string().nullable()
  }).nullable().optional()});