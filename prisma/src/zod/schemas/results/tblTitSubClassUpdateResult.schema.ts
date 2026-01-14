import * as z from 'zod';
export const tblTitSubClassUpdateResultSchema = z.nullable(z.object({
  SubClassCode: z.string(),
  TitleID: z.number().int(),
  tblTitles: z.unknown(),
  dictTitSubClass: z.unknown()
}));