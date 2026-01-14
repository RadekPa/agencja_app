import * as z from 'zod';
export const ArTransferDetailFindUniqueResultSchema = z.nullable(z.object({
  TransferID: z.number().int(),
  DebitID: z.number().int(),
  AmtWired: z.number().optional(),
  Notes: z.string().optional(),
  ArTransaction: z.unknown()
}));