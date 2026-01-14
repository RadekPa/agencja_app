import * as z from 'zod';
export const tblAuthorsDeleteResultSchema = z.nullable(z.object({
  AuthorID: z.number().int(),
  FullName: z.string().optional(),
  FirstName: z.string().optional(),
  MiddleName: z.string().optional(),
  LastName: z.string().optional(),
  Suffix: z.string().optional(),
  PenName: z.string().optional(),
  UserMod: z.string(),
  DateMod: z.date(),
  Remarks: z.string().optional(),
  tblTitAuthors: z.array(z.unknown())
}));