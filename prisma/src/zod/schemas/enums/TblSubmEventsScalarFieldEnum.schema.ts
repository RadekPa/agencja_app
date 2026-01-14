import * as z from 'zod';

export const TblSubmEventsScalarFieldEnumSchema = z.enum(['SubmEventID', 'SubmID', 'EventCode', 'EventDate', 'NoOfCopies', 'EndDate'])

export type TblSubmEventsScalarFieldEnum = z.infer<typeof TblSubmEventsScalarFieldEnumSchema>;