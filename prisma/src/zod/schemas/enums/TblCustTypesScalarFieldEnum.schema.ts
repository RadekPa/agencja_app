import * as z from 'zod';

export const TblCustTypesScalarFieldEnumSchema = z.enum(['CustID', 'CustTypeID'])

export type TblCustTypesScalarFieldEnum = z.infer<typeof TblCustTypesScalarFieldEnumSchema>;