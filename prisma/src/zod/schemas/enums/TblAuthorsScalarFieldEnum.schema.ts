import * as z from 'zod';

export const TblAuthorsScalarFieldEnumSchema = z.enum(['AuthorID', 'FullName', 'FirstName', 'MiddleName', 'LastName', 'Suffix', 'PenName', 'UserMod', 'DateMod', 'Remarks'])

export type TblAuthorsScalarFieldEnum = z.infer<typeof TblAuthorsScalarFieldEnumSchema>;