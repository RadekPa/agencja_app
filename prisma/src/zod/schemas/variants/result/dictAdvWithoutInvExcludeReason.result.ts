import * as z from 'zod';
// prettier-ignore
export const dictAdvWithoutInvExcludeReasonResultSchema = z.object({
    ExcludeReasonID: z.number().int(),
    ExcludeReasonCode: z.string().nullable(),
    ExcludeReasonDesc: z.string().nullable()
}).strict();

export type dictAdvWithoutInvExcludeReasonResultType = z.infer<typeof dictAdvWithoutInvExcludeReasonResultSchema>;
