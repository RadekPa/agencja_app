import * as z from 'zod';

export const TblMaterialScalarFieldEnumSchema = z.enum(['MatID', 'AgrID', 'MatTypeID', 'Amount', 'Currency', 'Remarks', 'RequestDate', 'ReceiveDate'])

export type TblMaterialScalarFieldEnum = z.infer<typeof TblMaterialScalarFieldEnumSchema>;