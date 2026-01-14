import * as z from 'zod';
// prettier-ignore
export const dictMatTypeResultSchema = z.object({
    MatTypeID: z.number().int(),
    MatTypeDesc: z.string(),
    MatTypeDescPL: z.string().nullable()
}).strict();

export type dictMatTypeResultType = z.infer<typeof dictMatTypeResultSchema>;
