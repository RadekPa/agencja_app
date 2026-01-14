import * as z from 'zod';
export const tblAuthorsFindManyResultSchema = z.object({
  data: z.array(z.object({
  AuthorID: z.number().int(),
  FullName: z.string().optional(),
  FirstName: z.string().optional(),
  MiddleName: z.string().optional(),
  LastName: z.string().optional(),
  Suffix: z.string().optional(),
  PenName: z.string().optional(),
  UserMod: z.string(),
  DateMod: z.date(),
  Remarks: z.string().optional(),
  tblTitAuthors: z.array(z.unknown())
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