import * as z from 'zod';

export const TblPubISBNScalarFieldEnumSchema = z.enum(['PubID', 'PubISBN1', 'PubISBN2'])

export type TblPubISBNScalarFieldEnum = z.infer<typeof TblPubISBNScalarFieldEnumSchema>;