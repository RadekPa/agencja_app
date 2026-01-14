import * as z from 'zod';
export const dictCoverFormatUpdateResultSchema = z.nullable(z.object({
  CoverFormatID: z.number().int(),
  CoverFormatDesc: z.string(),
  tblTitles: z.array(z.unknown())
}));