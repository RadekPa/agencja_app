import * as z from 'zod';

export const TblTitAuthorsScalarFieldEnumSchema = z.enum(['AuthorID', 'TitleID', 'Main', 'Lp'])

export type TblTitAuthorsScalarFieldEnum = z.infer<typeof TblTitAuthorsScalarFieldEnumSchema>;