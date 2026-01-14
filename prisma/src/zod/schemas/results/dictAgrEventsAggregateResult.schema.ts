import * as z from 'zod';
export const dictAgrEventsAggregateResultSchema = z.object({  _count: z.object({
    AgrEventCode: z.number(),
    AgrEventDesc: z.number(),
    Status: z.number(),
    tblAgrEvents: z.number()
  }).optional(),
  _sum: z.object({
    AgrEventCode: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    AgrEventCode: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    AgrEventCode: z.number().int().nullable(),
    AgrEventDesc: z.string().nullable(),
    Status: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    AgrEventCode: z.number().int().nullable(),
    AgrEventDesc: z.string().nullable(),
    Status: z.string().nullable()
  }).nullable().optional()});