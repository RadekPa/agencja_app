import * as z from 'zod';
export const dictCurrenciesUpsertResultSchema = z.object({
  CurrID: z.string(),
  CurrDesc: z.string(),
  tblAgreements: z.array(z.unknown())
});