import * as z from 'zod';
export const ArTransactionDetailUpdateResultSchema = z.nullable(z.object({
  ItemID: z.number().int(),
  TransactionID: z.number().int().optional(),
  AccountID: z.number().int().optional(),
  Amount: z.number().optional(),
  ArTransaction: z.unknown().optional()
}));