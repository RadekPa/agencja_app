import * as z from 'zod';
// prettier-ignore
export const dictXRateExcelNamesResultSchema = z.object({
    CurrID: z.string(),
    Name: z.string()
}).strict();

export type dictXRateExcelNamesResultType = z.infer<typeof dictXRateExcelNamesResultSchema>;
