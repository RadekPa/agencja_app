import * as z from 'zod';
export const dictCoverFormatFindUniqueResultSchema = z.nullable(z.object({
  CoverFormatID: z.number().int(),
  CoverFormatDesc: z.string(),
  tblTitles: z.array(z.unknown())
}));