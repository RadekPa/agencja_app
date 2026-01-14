import * as z from 'zod';
export const tblTitAuxCreateResultSchema = z.object({
  TitleID: z.number().int(),
  CopyrightLine: z.string().optional(),
  tblTitles: z.unknown()
});