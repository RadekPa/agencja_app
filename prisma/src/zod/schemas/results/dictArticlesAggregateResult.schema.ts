import * as z from 'zod';
export const dictArticlesAggregateResultSchema = z.object({  _count: z.object({
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
  }).nullable().optional()});