import * as z from 'zod';
// prettier-ignore
export const dictCurrenciesModelSchema = z.object({
    CurrID: z.string(),
    CurrDesc: z.string(),
    tblAgreements: z.array(z.unknown())
}).strict();

export type dictCurrenciesPureType = z.infer<typeof dictCurrenciesModelSchema>;
