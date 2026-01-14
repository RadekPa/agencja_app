import * as z from 'zod';
// prettier-ignore
export const ArTypeResultSchema = z.object({
    ArType: z.string(),
    ArTypeDescription: z.string().nullable(),
    ArTypeDescriptionPL: z.string().nullable()
}).strict();

export type ArTypeResultType = z.infer<typeof ArTypeResultSchema>;
