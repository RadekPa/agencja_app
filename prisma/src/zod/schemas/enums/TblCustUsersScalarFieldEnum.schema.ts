import * as z from 'zod';

export const TblCustUsersScalarFieldEnumSchema = z.enum(['CustID', 'Login'])

export type TblCustUsersScalarFieldEnum = z.infer<typeof TblCustUsersScalarFieldEnumSchema>;