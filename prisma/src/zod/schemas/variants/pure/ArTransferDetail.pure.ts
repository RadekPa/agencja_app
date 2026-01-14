import * as z from 'zod';
// prettier-ignore
export const ArTransferDetailModelSchema = z.object({
    TransferID: z.number().int(),
    DebitID: z.number().int(),
    AmtWired: z.number().nullable(),
    Notes: z.string().nullable(),
    ArTransaction: z.unknown()
}).strict();

export type ArTransferDetailPureType = z.infer<typeof ArTransferDetailModelSchema>;
