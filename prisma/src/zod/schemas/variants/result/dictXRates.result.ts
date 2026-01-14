import * as z from 'zod';
// prettier-ignore
export const dictXRatesResultSchema = z.object({
    CurrDate: z.date(),
    CurrID: z.string(),
    XRate: z.number()
}).strict();

export type dictXRatesResultType = z.infer<typeof dictXRatesResultSchema>;
