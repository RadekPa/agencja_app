import * as z from 'zod';
export const dictCurrenciesAggregateResultSchema = z.object({  _count: z.object({
    CurrID: z.number(),
    CurrDesc: z.number(),
    tblAgreements: z.number()
  }).optional(),
  _min: z.object({
    CurrID: z.string().nullable(),
    CurrDesc: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    CurrID: z.string().nullable(),
    CurrDesc: z.string().nullable()
  }).nullable().optional()});