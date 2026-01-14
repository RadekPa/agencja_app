import * as z from 'zod';

export const DictMatTypeScalarFieldEnumSchema = z.enum(['MatTypeID', 'MatTypeDesc', 'MatTypeDescPL'])

export type DictMatTypeScalarFieldEnum = z.infer<typeof DictMatTypeScalarFieldEnumSchema>;