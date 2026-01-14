import * as z from 'zod';

export const DictAdvTermScalarFieldEnumSchema = z.enum(['AdvTermId', 'AdvTermDesc', 'AdvTermPL'])

export type DictAdvTermScalarFieldEnum = z.infer<typeof DictAdvTermScalarFieldEnumSchema>;