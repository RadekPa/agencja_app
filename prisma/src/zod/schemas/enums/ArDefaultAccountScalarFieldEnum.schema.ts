import * as z from 'zod';

export const ArDefaultAccountScalarFieldEnumSchema = z.enum(['TransactionType', 'DefaultDebitAccount', 'DefaultCreditAccount'])

export type ArDefaultAccountScalarFieldEnum = z.infer<typeof ArDefaultAccountScalarFieldEnumSchema>;