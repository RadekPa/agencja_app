import * as z from 'zod';
export const dictCoverFormatCreateResultSchema = z.object({
  CoverFormatID: z.number().int(),
  CoverFormatDesc: z.string(),
  tblTitles: z.array(z.unknown())
});