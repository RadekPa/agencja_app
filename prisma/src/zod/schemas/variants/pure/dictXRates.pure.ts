import * as z from 'zod';
// prettier-ignore
export const dictXRatesModelSchema = z.object({
    CurrDate: z.date(),
    CurrID: z.string(),
    XRate: z.number()
}).strict();

export type dictXRatesPureType = z.infer<typeof dictXRatesModelSchema>;
