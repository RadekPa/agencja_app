import * as z from 'zod';

export const ArTypeScalarFieldEnumSchema = z.enum(['ArType', 'ArTypeDescription', 'ArTypeDescriptionPL'])

export type ArTypeScalarFieldEnum = z.infer<typeof ArTypeScalarFieldEnumSchema>;