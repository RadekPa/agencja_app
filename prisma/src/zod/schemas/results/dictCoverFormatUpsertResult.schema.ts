import * as z from 'zod';
export const dictCoverFormatUpsertResultSchema = z.object({
  CoverFormatID: z.number().int(),
  CoverFormatDesc: z.string(),
  tblTitles: z.array(z.unknown())
});