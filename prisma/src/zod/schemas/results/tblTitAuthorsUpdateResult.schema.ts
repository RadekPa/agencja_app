import * as z from 'zod';
export const tblTitAuthorsUpdateResultSchema = z.nullable(z.object({
  AuthorID: z.number().int(),
  TitleID: z.number().int(),
  Main: z.number().int().optional(),
  Lp: z.number().int(),
  tblAuthors: z.unknown(),
  tblTitles: z.unknown()
}));