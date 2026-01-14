import * as z from 'zod';

export const ArTransactionTypeScalarFieldEnumSchema = z.enum(['ArType', 'ArTypeDescription', 'ArTypeDescriptionPL'])

export type ArTransactionTypeScalarFieldEnum = z.infer<typeof ArTransactionTypeScalarFieldEnumSchema>;