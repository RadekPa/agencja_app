import * as z from 'zod';
// prettier-ignore
export const ArDefaultAccountModelSchema = z.object({
    TransactionType: z.number().int(),
    DefaultDebitAccount: z.number().int(),
    DefaultCreditAccount: z.number().int()
}).strict();

export type ArDefaultAccountPureType = z.infer<typeof ArDefaultAccountModelSchema>;
