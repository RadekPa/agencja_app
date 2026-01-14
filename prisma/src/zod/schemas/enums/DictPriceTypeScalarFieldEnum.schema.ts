import * as z from 'zod';

export const DictPriceTypeScalarFieldEnumSchema = z.enum(['PriceTypeID', 'PriceTypeDesc', 'PriceTypePL'])

export type DictPriceTypeScalarFieldEnum = z.infer<typeof DictPriceTypeScalarFieldEnumSchema>;