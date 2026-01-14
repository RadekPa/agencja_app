import * as z from 'zod';

export const DictCurrenciesScalarFieldEnumSchema = z.enum(['CurrID', 'CurrDesc'])

export type DictCurrenciesScalarFieldEnum = z.infer<typeof DictCurrenciesScalarFieldEnumSchema>;