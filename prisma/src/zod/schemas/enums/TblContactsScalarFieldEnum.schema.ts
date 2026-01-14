import * as z from 'zod';

export const TblContactsScalarFieldEnumSchema = z.enum(['ContactID', 'PhoneNumber', 'FirstName', 'MiddleName', 'LastName', 'Informal', 'Fax', 'Email', 'UserMod', 'DateMod', 'ContactPosition', 'Accountant'])

export type TblContactsScalarFieldEnum = z.infer<typeof TblContactsScalarFieldEnumSchema>;