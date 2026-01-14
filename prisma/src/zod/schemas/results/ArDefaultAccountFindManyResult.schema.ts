import * as z from 'zod';
export const ArDefaultAccountFindManyResultSchema = z.object({
  data: z.array(z.object({
  TransactionType: z.number().int(),
  DefaultDebitAccount: z.number().int(),
  DefaultCreditAccount: z.number().int()
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