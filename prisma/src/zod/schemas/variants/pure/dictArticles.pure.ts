import * as z from 'zod';
// prettier-ignore
export const dictArticlesModelSchema = z.object({
    Article: z.string(),
    LangAbb: z.string().nullable(),
    dictLanguages: z.unknown().nullable()
}).strict();

export type dictArticlesPureType = z.infer<typeof dictArticlesModelSchema>;
