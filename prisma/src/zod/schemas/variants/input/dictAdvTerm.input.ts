import * as z from 'zod';
// prettier-ignore
export const dictAdvTermInputSchema = z.object({
    AdvTermId: z.number().int(),
    AdvTermDesc: z.string().optional().nullable(),
    AdvTermPL: z.string().optional().nullable()
}).strict();

export type dictAdvTermInputType = z.infer<typeof dictAdvTermInputSchema>;
