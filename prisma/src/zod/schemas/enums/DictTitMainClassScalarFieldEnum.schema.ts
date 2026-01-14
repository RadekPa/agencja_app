import * as z from 'zod';

export const DictTitMainClassScalarFieldEnumSchema = z.enum(['ClassCode', 'ClassDesc'])

export type DictTitMainClassScalarFieldEnum = z.infer<typeof DictTitMainClassScalarFieldEnumSchema>;