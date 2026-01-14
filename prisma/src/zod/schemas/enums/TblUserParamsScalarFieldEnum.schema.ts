import * as z from 'zod';

export const TblUserParamsScalarFieldEnumSchema = z.enum(['Login', 'Name', 'Value'])

export type TblUserParamsScalarFieldEnum = z.infer<typeof TblUserParamsScalarFieldEnumSchema>;