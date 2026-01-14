import * as z from 'zod';

export const DictCopyTypeScalarFieldEnumSchema = z.enum(['CopyTypeID', 'CopyType'])

export type DictCopyTypeScalarFieldEnum = z.infer<typeof DictCopyTypeScalarFieldEnumSchema>;