import * as z from 'zod';

export const DictCustTypesScalarFieldEnumSchema = z.enum(['CustTypeID', 'CustTypeName', 'CustTypeDesc'])

export type DictCustTypesScalarFieldEnum = z.infer<typeof DictCustTypesScalarFieldEnumSchema>;