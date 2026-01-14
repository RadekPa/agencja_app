import * as z from 'zod';
// prettier-ignore
export const dictAdvTypeInputSchema = z.object({
    AdvTypeId: z.number().int(),
    AdvTypeDesc: z.string().optional().nullable(),
    AdvTypeDescPL: z.string().optional().nullable()
}).strict();

export type dictAdvTypeInputType = z.infer<typeof dictAdvTypeInputSchema>;
