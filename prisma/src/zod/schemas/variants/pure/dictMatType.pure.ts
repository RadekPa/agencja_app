import * as z from 'zod';
// prettier-ignore
export const dictMatTypeModelSchema = z.object({
    MatTypeID: z.number().int(),
    MatTypeDesc: z.string(),
    MatTypeDescPL: z.string().nullable()
}).strict();

export type dictMatTypePureType = z.infer<typeof dictMatTypeModelSchema>;
