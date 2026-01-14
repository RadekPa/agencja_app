import * as z from 'zod';
export const tblPubISBNAggregateResultSchema = z.object({  _count: z.object({
    PubID: z.number(),
    PubISBN1: z.number(),
    PubISBN2: z.number(),
    tblPublishers: z.number()
  }).optional(),
  _sum: z.object({
    PubID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    PubID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    PubID: z.number().nullable(),
    PubISBN1: z.string().nullable(),
    PubISBN2: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    PubID: z.number().nullable(),
    PubISBN1: z.string().nullable(),
    PubISBN2: z.string().nullable()
  }).nullable().optional()});