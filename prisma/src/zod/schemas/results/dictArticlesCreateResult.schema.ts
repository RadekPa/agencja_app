import * as z from 'zod';
export const dictArticlesCreateResultSchema = z.object({
  Article: z.string(),
  LangAbb: z.string().optional(),
  dictLanguages: z.unknown().optional()
});