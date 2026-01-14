import * as z from 'zod';

export const TblTitEventsScalarFieldEnumSchema = z.enum(['TitEventID', 'CopyTypeID', 'EventCode', 'TitleID', 'EventDate', 'NoOfCopies', 'EndDate'])

export type TblTitEventsScalarFieldEnum = z.infer<typeof TblTitEventsScalarFieldEnumSchema>;