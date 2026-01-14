import * as z from 'zod';
export const dictCurrenciesCreateResultSchema = z.object({
  CurrID: z.string(),
  CurrDesc: z.string(),
  tblAgreements: z.array(z.unknown())
});