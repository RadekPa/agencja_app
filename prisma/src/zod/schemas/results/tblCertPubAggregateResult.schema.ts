import * as z from 'zod';
export const tblCertPubAggregateResultSchema = z.object({  _count: z.object({
    ClientID: z.number(),
    Year: z.number(),
    PubID: z.number(),
    DateSent: z.number(),
    Original: z.number()
  }).optional(),
  _sum: z.object({
    ClientID: z.number().nullable(),
    Year: z.number().nullable(),
    PubID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    ClientID: z.number().nullable(),
    Year: z.number().nullable(),
    PubID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    ClientID: z.number().int().nullable(),
    Year: z.number().int().nullable(),
    PubID: z.number().int().nullable(),
    DateSent: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    ClientID: z.number().int().nullable(),
    Year: z.number().int().nullable(),
    PubID: z.number().int().nullable(),
    DateSent: z.date().nullable()
  }).nullable().optional()});