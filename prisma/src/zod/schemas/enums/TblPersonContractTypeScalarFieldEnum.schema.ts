import * as z from 'zod';

export const TblPersonContractTypeScalarFieldEnumSchema = z.enum(['CTypeID', 'CTypeDescr'])

export type TblPersonContractTypeScalarFieldEnum = z.infer<typeof TblPersonContractTypeScalarFieldEnumSchema>;