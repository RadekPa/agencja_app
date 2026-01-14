import * as z from 'zod';
export const ArDefaultAccountCreateResultSchema = z.object({
  TransactionType: z.number().int(),
  DefaultDebitAccount: z.number().int(),
  DefaultCreditAccount: z.number().int()
});