import * as z from 'zod';
// prettier-ignore
export const dictArticlesResultSchema = z.object({
    Article: z.string(),
    LangAbb: z.string().nullable(),
    dictLanguages: z.unknown().nullable()
}).strict();

export type dictArticlesResultType = z.infer<typeof dictArticlesResultSchema>;
