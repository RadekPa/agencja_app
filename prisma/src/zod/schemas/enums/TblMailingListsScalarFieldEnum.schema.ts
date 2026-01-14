import * as z from 'zod';

export const TblMailingListsScalarFieldEnumSchema = z.enum(['ClassCode', 'SubClassCode', 'CustID'])

export type TblMailingListsScalarFieldEnum = z.infer<typeof TblMailingListsScalarFieldEnumSchema>;