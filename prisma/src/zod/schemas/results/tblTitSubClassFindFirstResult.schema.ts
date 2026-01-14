import * as z from 'zod';
export const tblTitSubClassFindFirstResultSchema = z.nullable(z.object({
  SubClassCode: z.string(),
  TitleID: z.number().int(),
  tblTitles: z.unknown(),
  dictTitSubClass: z.unknown()
}));