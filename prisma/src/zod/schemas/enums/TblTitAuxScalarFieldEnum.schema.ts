import * as z from 'zod';

export const TblTitAuxScalarFieldEnumSchema = z.enum(['TitleID', 'CopyrightLine'])

export type TblTitAuxScalarFieldEnum = z.infer<typeof TblTitAuxScalarFieldEnumSchema>;