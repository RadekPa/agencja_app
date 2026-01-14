import * as z from 'zod';
// prettier-ignore
export const ArDefaultAccountInputSchema = z.object({
    TransactionType: z.number().int(),
    DefaultDebitAccount: z.number().int(),
    DefaultCreditAccount: z.number().int()
}).strict();

export type ArDefaultAccountInputType = z.infer<typeof ArDefaultAccountInputSchema>;
