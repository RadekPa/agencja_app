import * as z from 'zod';

export const DictTitSubClassScalarFieldEnumSchema = z.enum(['SubClassCode', 'ClassCode', 'SubClassDesc'])

export type DictTitSubClassScalarFieldEnum = z.infer<typeof DictTitSubClassScalarFieldEnumSchema>;