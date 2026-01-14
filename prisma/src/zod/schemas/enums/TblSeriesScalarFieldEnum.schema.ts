import * as z from 'zod';

export const TblSeriesScalarFieldEnumSchema = z.enum(['SeriesID', 'CustID', 'SeriesFullName', 'SeriesShortName'])

export type TblSeriesScalarFieldEnum = z.infer<typeof TblSeriesScalarFieldEnumSchema>;