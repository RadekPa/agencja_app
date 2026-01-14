import * as z from 'zod';
// prettier-ignore
export const dictXRatesInputSchema = z.object({
    CurrDate: z.date(),
    CurrID: z.string(),
    XRate: z.number()
}).strict();

export type dictXRatesInputType = z.infer<typeof dictXRatesInputSchema>;
