import * as z from 'zod';

export const DictRoyTypeScalarFieldEnumSchema = z.enum(['RoyTypeID', 'AgrRightID', 'RoyTypeDesc'])

export type DictRoyTypeScalarFieldEnum = z.infer<typeof DictRoyTypeScalarFieldEnumSchema>;