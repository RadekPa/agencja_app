import * as z from 'zod';

export const DictAdvTypeScalarFieldEnumSchema = z.enum(['AdvTypeId', 'AdvTypeDesc', 'AdvTypeDescPL'])

export type DictAdvTypeScalarFieldEnum = z.infer<typeof DictAdvTypeScalarFieldEnumSchema>;