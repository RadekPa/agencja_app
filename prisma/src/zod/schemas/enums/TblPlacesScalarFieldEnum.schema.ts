import * as z from 'zod';

export const TblPlacesScalarFieldEnumSchema = z.enum(['PlaceID', 'PlaceDesc'])

export type TblPlacesScalarFieldEnum = z.infer<typeof TblPlacesScalarFieldEnumSchema>;