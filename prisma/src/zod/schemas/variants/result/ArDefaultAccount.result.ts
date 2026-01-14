import * as z from 'zod';
// prettier-ignore
export const ArDefaultAccountResultSchema = z.object({
    TransactionType: z.number().int(),
    DefaultDebitAccount: z.number().int(),
    DefaultCreditAccount: z.number().int()
}).strict();

export type ArDefaultAccountResultType = z.infer<typeof ArDefaultAccountResultSchema>;
