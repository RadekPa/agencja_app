import * as z from 'zod';
export const ArAccountAggregateResultSchema = z.object({  _count: z.object({
    AccountID: z.number(),
    AccountDescription: z.number()
  }).optional(),
  _sum: z.object({
    AccountID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    AccountID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    AccountID: z.number().int().nullable(),
    AccountDescription: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    AccountID: z.number().int().nullable(),
    AccountDescription: z.string().nullable()
  }).nullable().optional()});