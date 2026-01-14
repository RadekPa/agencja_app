import * as z from 'zod';

export const TblAdvanceScalarFieldEnumSchema = z.enum(['AdvID', 'Inst', 'AgrID', 'AdvTermId', 'AdvTypeId', 'Amount', 'AdvTermDate', 'RoyID'])

export type TblAdvanceScalarFieldEnum = z.infer<typeof TblAdvanceScalarFieldEnumSchema>;