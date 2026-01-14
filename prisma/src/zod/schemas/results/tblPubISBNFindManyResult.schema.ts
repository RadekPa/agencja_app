import * as z from 'zod';
export const tblPubISBNFindManyResultSchema = z.object({
  data: z.array(z.object({
  PubID: z.number(),
  PubISBN1: z.string(),
  PubISBN2: z.string(),
  tblPublishers: z.unknown()
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