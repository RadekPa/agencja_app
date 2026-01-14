import * as z from 'zod';
export const ArTransferDetailFindManyResultSchema = z.object({
  data: z.array(z.object({
  TransferID: z.number().int(),
  DebitID: z.number().int(),
  AmtWired: z.number().optional(),
  Notes: z.string().optional(),
  ArTransaction: z.unknown()
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