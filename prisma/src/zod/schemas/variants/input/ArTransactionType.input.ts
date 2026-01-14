import * as z from 'zod';
// prettier-ignore
export const ArTransactionTypeInputSchema = z.object({
    ArType: z.number().int(),
    ArTypeDescription: z.string().optional().nullable(),
    ArTypeDescriptionPL: z.string().optional().nullable()
}).strict();

export type ArTransactionTypeInputType = z.infer<typeof ArTransactionTypeInputSchema>;
