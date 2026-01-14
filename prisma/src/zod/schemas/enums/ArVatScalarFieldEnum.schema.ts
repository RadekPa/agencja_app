import * as z from 'zod';

export const ArVatScalarFieldEnumSchema = z.enum(['VatCode', 'Description', 'VatRate', 'DescriptionPL'])

export type ArVatScalarFieldEnum = z.infer<typeof ArVatScalarFieldEnumSchema>;