import * as z from 'zod';
// prettier-ignore
export const ArTypeModelSchema = z.object({
    ArType: z.string(),
    ArTypeDescription: z.string().nullable(),
    ArTypeDescriptionPL: z.string().nullable()
}).strict();

export type ArTypePureType = z.infer<typeof ArTypeModelSchema>;
