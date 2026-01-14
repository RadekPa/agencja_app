import * as z from 'zod';
// prettier-ignore
export const dictMatTypeInputSchema = z.object({
    MatTypeID: z.number().int(),
    MatTypeDesc: z.string(),
    MatTypeDescPL: z.string().optional().nullable()
}).strict();

export type dictMatTypeInputType = z.infer<typeof dictMatTypeInputSchema>;
