import * as z from 'zod';
export const dictTitSubClassUpdateResultSchema = z.nullable(z.object({
  SubClassCode: z.string(),
  ClassCode: z.string().optional(),
  SubClassDesc: z.string().optional(),
  dictTitMainClass: z.unknown().optional(),
  tblMailingLists: z.array(z.unknown()),
  tblTitSubClass: z.array(z.unknown())
}));