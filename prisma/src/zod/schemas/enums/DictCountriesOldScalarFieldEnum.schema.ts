import * as z from 'zod';

export const DictCountriesOldScalarFieldEnumSchema = z.enum(['CountryID', 'CountryDesc', 'CountryPL', 'Tax', 'Code', 'EU'])

export type DictCountriesOldScalarFieldEnum = z.infer<typeof DictCountriesOldScalarFieldEnumSchema>;