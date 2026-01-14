import * as z from 'zod';
export const dictCoverFormatGroupByResultSchema = z.array(z.object({
  CoverFormatID: z.number().int(),
  CoverFormatDesc: z.string(),
  _count: z.object({
    CoverFormatID: z.number(),
    CoverFormatDesc: z.number(),
    tblTitles: z.number()
  }).optional(),
  _sum: z.object({
    CoverFormatID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    CoverFormatID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    CoverFormatID: z.number().int().nullable(),
    CoverFormatDesc: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    CoverFormatID: z.number().int().nullable(),
    CoverFormatDesc: z.string().nullable()
  }).nullable().optional()
}));