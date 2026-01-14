import * as z from 'zod';
// prettier-ignore
export const ArTransactionDetailResultSchema = z.object({
    ItemID: z.number().int(),
    TransactionID: z.number().int().nullable(),
    AccountID: z.number().int().nullable(),
    Amount: z.number().nullable(),
    ArTransaction: z.unknown().nullable()
}).strict();

export type ArTransactionDetailResultType = z.infer<typeof ArTransactionDetailResultSchema>;
