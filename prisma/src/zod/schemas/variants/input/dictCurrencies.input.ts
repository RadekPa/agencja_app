import * as z from 'zod';
// prettier-ignore
export const dictCurrenciesInputSchema = z.object({
    CurrID: z.string(),
    CurrDesc: z.string(),
    tblAgreements: z.array(z.unknown())
}).strict();

export type dictCurrenciesInputType = z.infer<typeof dictCurrenciesInputSchema>;
