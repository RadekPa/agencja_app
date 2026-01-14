import * as z from 'zod';

export const ArAccountScalarFieldEnumSchema = z.enum(['AccountID', 'AccountDescription'])

export type ArAccountScalarFieldEnum = z.infer<typeof ArAccountScalarFieldEnumSchema>;