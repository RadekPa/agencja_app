import * as z from 'zod';

export const TblAgrRightsScalarFieldEnumSchema = z.enum(['AgrRightID', 'AgrID', 'RightID', 'PriceTypeID', 'RoyPriceTypeID', 'RoyAccountIntervalID', 'DistID'])

export type TblAgrRightsScalarFieldEnum = z.infer<typeof TblAgrRightsScalarFieldEnumSchema>;