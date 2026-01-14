import * as z from 'zod';
export const ArDefaultAccountUpsertResultSchema = z.object({
  TransactionType: z.number().int(),
  DefaultDebitAccount: z.number().int(),
  DefaultCreditAccount: z.number().int()
});