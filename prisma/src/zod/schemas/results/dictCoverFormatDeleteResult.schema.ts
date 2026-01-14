import * as z from 'zod';
export const dictCoverFormatDeleteResultSchema = z.nullable(z.object({
  CoverFormatID: z.number().int(),
  CoverFormatDesc: z.string(),
  tblTitles: z.array(z.unknown())
}));