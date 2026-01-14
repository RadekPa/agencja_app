import * as z from 'zod';
export const tblTitAuxGroupByResultSchema = z.array(z.object({
  TitleID: z.number().int(),
  CopyrightLine: z.string(),
  _count: z.object({
    TitleID: z.number(),
    CopyrightLine: z.number(),
    tblTitles: z.number()
  }).optional(),
  _sum: z.object({
    TitleID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    TitleID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    TitleID: z.number().int().nullable(),
    CopyrightLine: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    TitleID: z.number().int().nullable(),
    CopyrightLine: z.string().nullable()
  }).nullable().optional()
}));