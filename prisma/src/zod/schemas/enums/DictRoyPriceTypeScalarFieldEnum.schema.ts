import * as z from 'zod';

export const DictRoyPriceTypeScalarFieldEnumSchema = z.enum(['RoyPriceTypeID', 'RoyPriceTypeDesc', 'RoyPriceTypePL'])

export type DictRoyPriceTypeScalarFieldEnum = z.infer<typeof DictRoyPriceTypeScalarFieldEnumSchema>;