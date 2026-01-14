import * as z from 'zod';

export const DictStatesScalarFieldEnumSchema = z.enum(['StateID', 'CountryID', 'StateAbb', 'StateName'])

export type DictStatesScalarFieldEnum = z.infer<typeof DictStatesScalarFieldEnumSchema>;