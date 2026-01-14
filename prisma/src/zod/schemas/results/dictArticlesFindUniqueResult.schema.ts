import * as z from 'zod';
export const dictArticlesFindUniqueResultSchema = z.nullable(z.object({
  Article: z.string(),
  LangAbb: z.string().optional(),
  dictLanguages: z.unknown().optional()
}));