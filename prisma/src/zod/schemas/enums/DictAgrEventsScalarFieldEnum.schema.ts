import * as z from 'zod';

export const DictAgrEventsScalarFieldEnumSchema = z.enum(['AgrEventCode', 'AgrEventDesc', 'Status'])

export type DictAgrEventsScalarFieldEnum = z.infer<typeof DictAgrEventsScalarFieldEnumSchema>;