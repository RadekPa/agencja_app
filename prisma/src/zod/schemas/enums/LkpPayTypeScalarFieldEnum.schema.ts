import * as z from 'zod';

export const LkpPayTypeScalarFieldEnumSchema = z.enum(['PayTypeID', 'Description', 'DescriptionPL'])

export type LkpPayTypeScalarFieldEnum = z.infer<typeof LkpPayTypeScalarFieldEnumSchema>;