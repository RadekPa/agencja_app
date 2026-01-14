import * as z from 'zod';
export const tblTitSubClassDeleteResultSchema = z.nullable(z.object({
  SubClassCode: z.string(),
  TitleID: z.number().int(),
  tblTitles: z.unknown(),
  dictTitSubClass: z.unknown()
}));