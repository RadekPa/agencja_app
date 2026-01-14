import * as z from 'zod';

export const TblCertPubScalarFieldEnumSchema = z.enum(['ClientID', 'Year', 'PubID', 'DateSent', 'Original'])

export type TblCertPubScalarFieldEnum = z.infer<typeof TblCertPubScalarFieldEnumSchema>;