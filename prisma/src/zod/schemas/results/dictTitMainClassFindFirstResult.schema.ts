import * as z from 'zod';
export const dictTitMainClassFindFirstResultSchema = z.nullable(z.object({
  ClassCode: z.string(),
  ClassDesc: z.string().optional(),
  dictTitSubClass: z.array(z.unknown()),
  tblMailingLists: z.array(z.unknown()),
  tblTitles: z.array(z.unknown())
}));