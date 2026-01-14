import * as z from 'zod';
// prettier-ignore
export const dictAdvWithoutInvExcludeReasonModelSchema = z.object({
    ExcludeReasonID: z.number().int(),
    ExcludeReasonCode: z.string().nullable(),
    ExcludeReasonDesc: z.string().nullable()
}).strict();

export type dictAdvWithoutInvExcludeReasonPureType = z.infer<typeof dictAdvWithoutInvExcludeReasonModelSchema>;
