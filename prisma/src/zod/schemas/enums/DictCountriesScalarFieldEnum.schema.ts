import * as z from 'zod';

export const DictCountriesScalarFieldEnumSchema = z.enum(['CountryID', 'CountryDesc', 'CountryPL', 'Tax', 'Code', 'EU'])

export type DictCountriesScalarFieldEnum = z.infer<typeof DictCountriesScalarFieldEnumSchema>;