import * as z from 'zod';

export const SysdiagramsScalarFieldEnumSchema = z.enum(['name', 'principal_id', 'diagram_id', 'version', 'definition'])

export type SysdiagramsScalarFieldEnum = z.infer<typeof SysdiagramsScalarFieldEnumSchema>;