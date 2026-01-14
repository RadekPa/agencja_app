import * as z from 'zod';
// prettier-ignore
export const dictLanguagesResultSchema = z.object({
    LangAbb: z.string(),
    LangDesc: z.string(),
    LangPL: z.string(),
    dictArticles: z.array(z.unknown()),
    tblAgreements: z.array(z.unknown()),
    tblCustomers: z.array(z.unknown()),
    tblTitles: z.array(z.unknown())
}).strict();

export type dictLanguagesResultType = z.infer<typeof dictLanguagesResultSchema>;
