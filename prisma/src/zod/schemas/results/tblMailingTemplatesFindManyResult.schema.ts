import * as z from 'zod';
export const tblMailingTemplatesFindManyResultSchema = z.object({
  data: z.array(z.object({
  TempID: z.number().int(),
  TempName: z.string(),
  TempPath: z.string(),
  TempSubject: z.string()
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