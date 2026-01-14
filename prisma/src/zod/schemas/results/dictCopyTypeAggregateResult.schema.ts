import * as z from 'zod';
export const dictCopyTypeAggregateResultSchema = z.object({  _count: z.object({
    CopyTypeID: z.number(),
    CopyType: z.number(),
    tblSubmissions: z.number(),
    tblTitEvents: z.number()
  }).optional(),
  _sum: z.object({
    CopyTypeID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    CopyTypeID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    CopyTypeID: z.number().int().nullable(),
    CopyType: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    CopyTypeID: z.number().int().nullable(),
    CopyType: z.string().nullable()
  }).nullable().optional()});