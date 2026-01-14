import * as z from 'zod';
export const ArDefaultAccountUpdateResultSchema = z.nullable(z.object({
  TransactionType: z.number().int(),
  DefaultDebitAccount: z.number().int(),
  DefaultCreditAccount: z.number().int()
}));