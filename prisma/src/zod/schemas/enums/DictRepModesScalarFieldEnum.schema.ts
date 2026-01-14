import * as z from 'zod';

export const DictRepModesScalarFieldEnumSchema = z.enum(['RepModeID', 'RepModeDesc'])

export type DictRepModesScalarFieldEnum = z.infer<typeof DictRepModesScalarFieldEnumSchema>;