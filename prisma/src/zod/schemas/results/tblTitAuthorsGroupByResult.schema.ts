import * as z from 'zod';
export const tblTitAuthorsGroupByResultSchema = z.array(z.object({
  AuthorID: z.number().int(),
  TitleID: z.number().int(),
  Main: z.number().int(),
  Lp: z.number().int(),
  _count: z.object({
    AuthorID: z.number(),
    TitleID: z.number(),
    Main: z.number(),
    Lp: z.number(),
    tblAuthors: z.number(),
    tblTitles: z.number()
  }).optional(),
  _sum: z.object({
    AuthorID: z.number().nullable(),
    TitleID: z.number().nullable(),
    Main: z.number().nullable(),
    Lp: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    AuthorID: z.number().nullable(),
    TitleID: z.number().nullable(),
    Main: z.number().nullable(),
    Lp: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    AuthorID: z.number().int().nullable(),
    TitleID: z.number().int().nullable(),
    Main: z.number().int().nullable(),
    Lp: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    AuthorID: z.number().int().nullable(),
    TitleID: z.number().int().nullable(),
    Main: z.number().int().nullable(),
    Lp: z.number().int().nullable()
  }).nullable().optional()
}));