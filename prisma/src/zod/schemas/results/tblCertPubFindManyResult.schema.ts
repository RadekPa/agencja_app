import * as z from 'zod';
export const tblCertPubFindManyResultSchema = z.object({
  data: z.array(z.object({
  ClientID: z.number().int(),
  Year: z.number().int(),
  PubID: z.number().int(),
  DateSent: z.date().optional(),
  Original: z.boolean().optional()
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