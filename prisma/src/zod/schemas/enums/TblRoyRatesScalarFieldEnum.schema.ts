import * as z from 'zod';

export const TblRoyRatesScalarFieldEnumSchema = z.enum(['Step', 'AgrRightID', 'AgrID', 'CpsMax', 'Rate'])

export type TblRoyRatesScalarFieldEnum = z.infer<typeof TblRoyRatesScalarFieldEnumSchema>;