import * as z from 'zod';
export const tblSeriesUpsertResultSchema = z.object({
  SeriesID: z.number().int(),
  CustID: z.number().int().optional(),
  SeriesFullName: z.string().optional(),
  SeriesShortName: z.string().optional(),
  tblCustomers: z.unknown().optional()
});