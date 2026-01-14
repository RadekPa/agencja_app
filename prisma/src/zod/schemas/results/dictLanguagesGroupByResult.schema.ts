import * as z from 'zod';
export const dictLanguagesGroupByResultSchema = z.array(z.object({
  LangAbb: z.string(),
  LangDesc: z.string(),
  LangPL: z.string(),
  _count: z.object({
    LangAbb: z.number(),
    LangDesc: z.number(),
    LangPL: z.number(),
    dictArticles: z.number(),
    tblAgreements: z.number(),
    tblCustomers: z.number(),
    tblTitles: z.number()
  }).optional(),
  _min: z.object({
    LangAbb: z.string().nullable(),
    LangDesc: z.string().nullable(),
    LangPL: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    LangAbb: z.string().nullable(),
    LangDesc: z.string().nullable(),
    LangPL: z.string().nullable()
  }).nullable().optional()
}));