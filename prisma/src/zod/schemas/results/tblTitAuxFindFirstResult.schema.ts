import * as z from 'zod';
export const tblTitAuxFindFirstResultSchema = z.nullable(z.object({
  TitleID: z.number().int(),
  CopyrightLine: z.string().optional(),
  tblTitles: z.unknown()
}));