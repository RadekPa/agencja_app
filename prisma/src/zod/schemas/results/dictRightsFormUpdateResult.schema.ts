import * as z from 'zod';
export const dictRightsFormUpdateResultSchema = z.nullable(z.object({
  RightFormID: z.number().int(),
  RightFormDesc: z.string(),
  RightFormPL: z.string().optional(),
  RightFormAbbPL: z.string().optional(),
  RightFormAbbEN: z.string().optional(),
  tblAgrRights: z.array(z.unknown())
}));