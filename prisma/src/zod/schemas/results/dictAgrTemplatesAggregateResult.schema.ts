import * as z from 'zod';
export const dictAgrTemplatesAggregateResultSchema = z.object({  _count: z.object({
    Name: z.number(),
    FileName: z.number()
  }).optional(),
  _min: z.object({
    Name: z.string().nullable(),
    FileName: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    Name: z.string().nullable(),
    FileName: z.string().nullable()
  }).nullable().optional()});