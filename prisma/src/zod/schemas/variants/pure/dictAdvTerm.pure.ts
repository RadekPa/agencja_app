import * as z from 'zod';
// prettier-ignore
export const dictAdvTermModelSchema = z.object({
    AdvTermId: z.number().int(),
    AdvTermDesc: z.string().nullable(),
    AdvTermPL: z.string().nullable()
}).strict();

export type dictAdvTermPureType = z.infer<typeof dictAdvTermModelSchema>;
