import * as z from 'zod';
// prettier-ignore
export const dictArticlesInputSchema = z.object({
    Article: z.string(),
    LangAbb: z.string().optional().nullable(),
    dictLanguages: z.unknown().optional().nullable()
}).strict();

export type dictArticlesInputType = z.infer<typeof dictArticlesInputSchema>;
