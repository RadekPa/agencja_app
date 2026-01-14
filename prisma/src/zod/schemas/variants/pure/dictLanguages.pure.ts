import * as z from 'zod';
// prettier-ignore
export const dictLanguagesModelSchema = z.object({
    LangAbb: z.string(),
    LangDesc: z.string(),
    LangPL: z.string(),
    dictArticles: z.array(z.unknown()),
    tblAgreements: z.array(z.unknown()),
    tblCustomers: z.array(z.unknown()),
    tblTitles: z.array(z.unknown())
}).strict();

export type dictLanguagesPureType = z.infer<typeof dictLanguagesModelSchema>;
