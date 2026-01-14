import * as z from 'zod';
// prettier-ignore
export const ArTypeInputSchema = z.object({
    ArType: z.string(),
    ArTypeDescription: z.string().optional().nullable(),
    ArTypeDescriptionPL: z.string().optional().nullable()
}).strict();

export type ArTypeInputType = z.infer<typeof ArTypeInputSchema>;
