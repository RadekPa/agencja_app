import * as z from 'zod';
// prettier-ignore
export const tblSeriesModelSchema = z.object({
    SeriesID: z.number().int(),
    CustID: z.number().int().nullable(),
    SeriesFullName: z.string().nullable(),
    SeriesShortName: z.string().nullable(),
    tblCustomers: z.unknown().nullable()
}).strict();

export type tblSeriesPureType = z.infer<typeof tblSeriesModelSchema>;
