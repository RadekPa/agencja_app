import * as z from 'zod';
// prettier-ignore
export const dictCurrenciesResultSchema = z.object({
    CurrID: z.string(),
    CurrDesc: z.string(),
    tblAgreements: z.array(z.unknown())
}).strict();

export type dictCurrenciesResultType = z.infer<typeof dictCurrenciesResultSchema>;
