import * as z from 'zod';
export const ArTransactionDetailFindManyResultSchema = z.object({
  data: z.array(z.object({
  ItemID: z.number().int(),
  TransactionID: z.number().int().optional(),
  AccountID: z.number().int().optional(),
  Amount: z.number().optional(),
  ArTransaction: z.unknown().optional()
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