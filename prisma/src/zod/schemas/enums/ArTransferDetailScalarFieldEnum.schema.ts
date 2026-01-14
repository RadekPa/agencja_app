import * as z from 'zod';

export const ArTransferDetailScalarFieldEnumSchema = z.enum(['TransferID', 'DebitID', 'AmtWired', 'Notes'])

export type ArTransferDetailScalarFieldEnum = z.infer<typeof ArTransferDetailScalarFieldEnumSchema>;