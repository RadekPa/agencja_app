import * as z from 'zod';
// prettier-ignore
export const dictXRateExcelNamesInputSchema = z.object({
    CurrID: z.string(),
    Name: z.string()
}).strict();

export type dictXRateExcelNamesInputType = z.infer<typeof dictXRateExcelNamesInputSchema>;
