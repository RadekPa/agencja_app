import * as z from 'zod';
// prettier-ignore
export const ArTransferDetailResultSchema = z.object({
    TransferID: z.number().int(),
    DebitID: z.number().int(),
    AmtWired: z.number().nullable(),
    Notes: z.string().nullable(),
    ArTransaction: z.unknown()
}).strict();

export type ArTransferDetailResultType = z.infer<typeof ArTransferDetailResultSchema>;
