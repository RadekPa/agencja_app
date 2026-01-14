import * as z from 'zod';

export const TblUsersScalarFieldEnumSchema = z.enum(['Login', 'FirstName', 'MiddleName', 'LastName', 'CompanyPosition', 'Birthday', 'Status', 'Initials', 'Phone', 'MobilePhone', 'Email', 'Sex', 'Street', 'ZipCode', 'City', 'Country', 'Remarks', 'UserMod', 'DateMod', 'Nameday', 'PersonID'])

export type TblUsersScalarFieldEnum = z.infer<typeof TblUsersScalarFieldEnumSchema>;