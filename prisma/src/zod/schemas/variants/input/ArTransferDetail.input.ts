import * as z from 'zod';
// prettier-ignore
export const ArTransferDetailInputSchema = z.object({
    TransferID: z.number().int(),
    DebitID: z.number().int(),
    AmtWired: z.number().optional().nullable(),
    Notes: z.string().optional().nullable(),
    ArTransaction: z.unknown()
}).strict();

export type ArTransferDetailInputType = z.infer<typeof ArTransferDetailInputSchema>;
