import * as z from 'zod';

export const DictAgrTemplatesScalarFieldEnumSchema = z.enum(['Name', 'FileName'])

export type DictAgrTemplatesScalarFieldEnum = z.infer<typeof DictAgrTemplatesScalarFieldEnumSchema>;