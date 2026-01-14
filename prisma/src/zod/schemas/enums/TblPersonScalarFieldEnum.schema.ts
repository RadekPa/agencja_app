import * as z from 'zod';

export const TblPersonScalarFieldEnumSchema = z.enum(['PersonID', 'LastName', 'FirstName', 'MiddleName', 'BirthDate', 'PESEL', 'Status', 'Address1', 'Address2', 'Zip', 'City', 'Country', 'MobileGRAAL', 'MobilePrivate', 'ExtGRAAL', 'emailGraal', 'emailPriv'])

export type TblPersonScalarFieldEnum = z.infer<typeof TblPersonScalarFieldEnumSchema>;