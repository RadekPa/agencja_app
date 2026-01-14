import * as z from 'zod';
export const dictArticlesGroupByResultSchema = z.array(z.object({
  Article: z.string(),
  LangAbb: z.string(),
  _count: z.object({
    Article: z.number(),
    LangAbb: z.number(),
    dictLanguages: z.number()
  }).optional(),
  _min: z.object({
    Article: z.string().nullable(),
    LangAbb: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    Article: z.string().nullable(),
    LangAbb: z.string().nullable()
  }).nullable().optional()
}));