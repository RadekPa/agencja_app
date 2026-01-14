import * as z from 'zod';
export const dictCurrenciesGroupByResultSchema = z.array(z.object({
  CurrID: z.string(),
  CurrDesc: z.string(),
  _count: z.object({
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
  }).nullable().optional()
}));