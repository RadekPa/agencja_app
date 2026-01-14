import * as z from 'zod';

export const TblPersonLoginScalarFieldEnumSchema = z.enum(['PersonID', 'Login', 'DateBegin', 'DateEnd'])

export type TblPersonLoginScalarFieldEnum = z.infer<typeof TblPersonLoginScalarFieldEnumSchema>;