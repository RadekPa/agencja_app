import * as z from 'zod';

export const TblClientsObsoleteScalarFieldEnumSchema = z.enum(['CustID', 'RepModeID', 'GraalID', 'Commission', 'DefAgrDoc', 'Jurisdiction'])

export type TblClientsObsoleteScalarFieldEnum = z.infer<typeof TblClientsObsoleteScalarFieldEnumSchema>;