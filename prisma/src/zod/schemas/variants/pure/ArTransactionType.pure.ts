import * as z from 'zod';
// prettier-ignore
export const ArTransactionTypeModelSchema = z.object({
    ArType: z.number().int(),
    ArTypeDescription: z.string().nullable(),
    ArTypeDescriptionPL: z.string().nullable()
}).strict();

export type ArTransactionTypePureType = z.infer<typeof ArTransactionTypeModelSchema>;
