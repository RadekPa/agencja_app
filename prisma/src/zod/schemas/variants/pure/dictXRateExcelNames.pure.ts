import * as z from 'zod';
// prettier-ignore
export const dictXRateExcelNamesModelSchema = z.object({
    CurrID: z.string(),
    Name: z.string()
}).strict();

export type dictXRateExcelNamesPureType = z.infer<typeof dictXRateExcelNamesModelSchema>;
