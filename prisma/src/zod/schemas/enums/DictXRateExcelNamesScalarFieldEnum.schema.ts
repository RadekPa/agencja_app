import * as z from 'zod';

export const DictXRateExcelNamesScalarFieldEnumSchema = z.enum(['CurrID', 'Name'])

export type DictXRateExcelNamesScalarFieldEnum = z.infer<typeof DictXRateExcelNamesScalarFieldEnumSchema>;