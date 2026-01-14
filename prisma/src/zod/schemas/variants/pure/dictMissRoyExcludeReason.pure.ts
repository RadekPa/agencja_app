import * as z from 'zod';
// prettier-ignore
export const dictMissRoyExcludeReasonModelSchema = z.object({
    ExcludeReasonID: z.number().int(),
    ExcludeReasonCode: z.string().nullable(),
    ExcludeReasonDesc: z.string().nullable()
}).strict();

export type dictMissRoyExcludeReasonPureType = z.infer<typeof dictMissRoyExcludeReasonModelSchema>;
