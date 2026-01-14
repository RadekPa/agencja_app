import * as z from 'zod';

export const TblPubLocalScalarFieldEnumSchema = z.enum(['PubLocalID', 'AgrID', 'LocalTitle', 'PubDate', 'LocalISBN', 'Printrun', 'LocalEdition'])

export type TblPubLocalScalarFieldEnum = z.infer<typeof TblPubLocalScalarFieldEnumSchema>;