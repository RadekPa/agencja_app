import * as z from 'zod';

export const ArTransactionDetailScalarFieldEnumSchema = z.enum(['ItemID', 'TransactionID', 'AccountID', 'Amount'])

export type ArTransactionDetailScalarFieldEnum = z.infer<typeof ArTransactionDetailScalarFieldEnumSchema>;