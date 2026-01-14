import * as z from 'zod';

export const TblTitSubClassScalarFieldEnumSchema = z.enum(['SubClassCode', 'TitleID'])

export type TblTitSubClassScalarFieldEnum = z.infer<typeof TblTitSubClassScalarFieldEnumSchema>;