import * as z from 'zod';

export const DictCoverFormatScalarFieldEnumSchema = z.enum(['CoverFormatID', 'CoverFormatDesc'])

export type DictCoverFormatScalarFieldEnum = z.infer<typeof DictCoverFormatScalarFieldEnumSchema>;