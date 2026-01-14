import * as z from 'zod';
// prettier-ignore
export const ArTransactionTypeResultSchema = z.object({
    ArType: z.number().int(),
    ArTypeDescription: z.string().nullable(),
    ArTypeDescriptionPL: z.string().nullable()
}).strict();

export type ArTransactionTypeResultType = z.infer<typeof ArTransactionTypeResultSchema>;
