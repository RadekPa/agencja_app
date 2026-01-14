import * as z from 'zod';
// prettier-ignore
export const tblSeriesInputSchema = z.object({
    SeriesID: z.number().int(),
    CustID: z.number().int().optional().nullable(),
    SeriesFullName: z.string().optional().nullable(),
    SeriesShortName: z.string().optional().nullable(),
    tblCustomers: z.unknown().optional().nullable()
}).strict();

export type tblSeriesInputType = z.infer<typeof tblSeriesInputSchema>;
