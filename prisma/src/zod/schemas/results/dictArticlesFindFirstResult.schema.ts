import * as z from 'zod';
export const dictArticlesFindFirstResultSchema = z.nullable(z.object({
  Article: z.string(),
  LangAbb: z.string().optional(),
  dictLanguages: z.unknown().optional()
}));