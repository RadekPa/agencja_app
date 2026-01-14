import * as z from 'zod';

export const TblPdoxInvMatScalarFieldEnumSchema = z.enum(['Invoice_Nr', 'Title', 'ISBN'])

export type TblPdoxInvMatScalarFieldEnum = z.infer<typeof TblPdoxInvMatScalarFieldEnumSchema>;