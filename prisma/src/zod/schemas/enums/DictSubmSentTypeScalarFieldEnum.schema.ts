import * as z from 'zod';

export const DictSubmSentTypeScalarFieldEnumSchema = z.enum(['SubmSentTypeID', 'SubmSentType'])

export type DictSubmSentTypeScalarFieldEnum = z.infer<typeof DictSubmSentTypeScalarFieldEnumSchema>;