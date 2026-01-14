import * as z from 'zod';
export const dictCurrenciesUpdateResultSchema = z.nullable(z.object({
  CurrID: z.string(),
  CurrDesc: z.string(),
  tblAgreements: z.array(z.unknown())
}));