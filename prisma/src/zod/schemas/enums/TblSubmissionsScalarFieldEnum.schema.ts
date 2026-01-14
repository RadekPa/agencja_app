import * as z from 'zod';

export const TblSubmissionsScalarFieldEnumSchema = z.enum(['SubmID', 'CopyTypeID', 'SubmSentTypeID', 'TitleID', 'CustID', 'Exclusive', 'SubmDate', 'SentDate', 'EndDate', 'ReturnDate', 'NoOfCopies', 'TrackingNo', 'UserMod', 'DateMod', 'Status', 'SubmNr', 'Remarks', 'ContactID'])

export type TblSubmissionsScalarFieldEnum = z.infer<typeof TblSubmissionsScalarFieldEnumSchema>;