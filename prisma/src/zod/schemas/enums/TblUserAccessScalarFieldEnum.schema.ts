import * as z from 'zod';

export const TblUserAccessScalarFieldEnumSchema = z.enum(['Login', 'PlaceID'])

export type TblUserAccessScalarFieldEnum = z.infer<typeof TblUserAccessScalarFieldEnumSchema>;