import * as z from 'zod';

export const DictEventsScalarFieldEnumSchema = z.enum(['EventCode', 'EventDesc'])

export type DictEventsScalarFieldEnum = z.infer<typeof DictEventsScalarFieldEnumSchema>;