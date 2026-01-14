import * as z from 'zod';
export const tblTitAuxFindUniqueResultSchema = z.nullable(z.object({
  TitleID: z.number().int(),
  CopyrightLine: z.string().optional(),
  tblTitles: z.unknown()
}));