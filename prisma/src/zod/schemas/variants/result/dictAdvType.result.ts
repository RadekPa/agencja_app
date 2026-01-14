import * as z from 'zod';
// prettier-ignore
export const dictAdvTypeResultSchema = z.object({
    AdvTypeId: z.number().int(),
    AdvTypeDesc: z.string().nullable(),
    AdvTypeDescPL: z.string().nullable()
}).strict();

export type dictAdvTypeResultType = z.infer<typeof dictAdvTypeResultSchema>;
