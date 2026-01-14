import * as z from 'zod';
export const tblPubLocalFindManyResultSchema = z.object({
  data: z.array(z.object({
  PubLocalID: z.number().int(),
  AgrID: z.number().int().optional(),
  LocalTitle: z.string().optional(),
  PubDate: z.date().optional(),
  LocalISBN: z.string().optional(),
  Printrun: z.number().int().optional(),
  LocalEdition: z.number().int().optional(),
  tblAgreements: z.unknown().optional()
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