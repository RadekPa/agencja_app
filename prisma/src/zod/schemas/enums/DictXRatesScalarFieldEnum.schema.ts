import * as z from 'zod';

export const DictXRatesScalarFieldEnumSchema = z.enum(['CurrDate', 'CurrID', 'XRate'])

export type DictXRatesScalarFieldEnum = z.infer<typeof DictXRatesScalarFieldEnumSchema>;