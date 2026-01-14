import * as z from 'zod';

export const TblAgrEventsScalarFieldEnumSchema = z.enum(['AgrEventID', 'AgrID', 'AgrEventCode', 'EventDate', 'NoOfCopies', 'EndDate', 'DateMod', 'UserMod'])

export type TblAgrEventsScalarFieldEnum = z.infer<typeof TblAgrEventsScalarFieldEnumSchema>;