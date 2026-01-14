import * as z from 'zod';
export const tblPdoxInvMatAggregateResultSchema = z.object({  _count: z.object({
    Invoice_Nr: z.number(),
    Title: z.number(),
    ISBN: z.number()
  }).optional(),
  _sum: z.object({
    Invoice_Nr: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    Invoice_Nr: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    Invoice_Nr: z.number().int().nullable(),
    Title: z.string().nullable(),
    ISBN: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    Invoice_Nr: z.number().int().nullable(),
    Title: z.string().nullable(),
    ISBN: z.string().nullable()
  }).nullable().optional()});