import * as z from 'zod';
// prettier-ignore
export const dictMissRoyExcludeReasonInputSchema = z.object({
    ExcludeReasonID: z.number().int(),
    ExcludeReasonCode: z.string().optional().nullable(),
    ExcludeReasonDesc: z.string().optional().nullable()
}).strict();

export type dictMissRoyExcludeReasonInputType = z.infer<typeof dictMissRoyExcludeReasonInputSchema>;
