import * as z from 'zod';
// prettier-ignore
export const dictAdvTermResultSchema = z.object({
    AdvTermId: z.number().int(),
    AdvTermDesc: z.string().nullable(),
    AdvTermPL: z.string().nullable()
}).strict();

export type dictAdvTermResultType = z.infer<typeof dictAdvTermResultSchema>;
