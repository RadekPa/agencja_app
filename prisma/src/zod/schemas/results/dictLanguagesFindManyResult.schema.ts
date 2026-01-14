import * as z from 'zod';
export const dictLanguagesFindManyResultSchema = z.object({
  data: z.array(z.object({
  LangAbb: z.string(),
  LangDesc: z.string(),
  LangPL: z.string(),
  dictArticles: z.array(z.unknown()),
  tblAgreements: z.array(z.unknown()),
  tblCustomers: z.array(z.unknown()),
  tblTitles: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});