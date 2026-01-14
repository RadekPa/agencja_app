import * as z from 'zod';

export const TblRoyaltyScalarFieldEnumSchema = z.enum(['RoyID', 'AgrID', 'AgrRightID', 'RoyNr', 'EnterDate', 'RoyDate', 'Copies', 'Price', 'RoyRate', 'XRate', 'ThisRoy', 'AdvLeft', 'RoyDue', 'Pay', 'AdvID'])

export type TblRoyaltyScalarFieldEnum = z.infer<typeof TblRoyaltyScalarFieldEnumSchema>;