import * as z from 'zod';
// prettier-ignore
export const ArTransactionDetailInputSchema = z.object({
    ItemID: z.number().int(),
    TransactionID: z.number().int().optional().nullable(),
    AccountID: z.number().int().optional().nullable(),
    Amount: z.number().optional().nullable(),
    ArTransaction: z.unknown().optional().nullable()
}).strict();

export type ArTransactionDetailInputType = z.infer<typeof ArTransactionDetailInputSchema>;
