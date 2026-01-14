import * as z from 'zod';

export const TblCustContactsScalarFieldEnumSchema = z.enum(['ContactID', 'CustID', 'DefaultContact', 'TypeOfContact', 'Phone', 'CellPhone', 'Fax', 'Email', 'IsSameAsClient'])

export type TblCustContactsScalarFieldEnum = z.infer<typeof TblCustContactsScalarFieldEnumSchema>;