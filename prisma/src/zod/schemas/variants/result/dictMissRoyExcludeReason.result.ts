import * as z from 'zod';
// prettier-ignore
export const dictMissRoyExcludeReasonResultSchema = z.object({
    ExcludeReasonID: z.number().int(),
    ExcludeReasonCode: z.string().nullable(),
    ExcludeReasonDesc: z.string().nullable()
}).strict();

export type dictMissRoyExcludeReasonResultType = z.infer<typeof dictMissRoyExcludeReasonResultSchema>;
