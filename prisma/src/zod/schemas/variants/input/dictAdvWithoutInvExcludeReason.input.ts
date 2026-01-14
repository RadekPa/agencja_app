import * as z from 'zod';
// prettier-ignore
export const dictAdvWithoutInvExcludeReasonInputSchema = z.object({
    ExcludeReasonID: z.number().int(),
    ExcludeReasonCode: z.string().optional().nullable(),
    ExcludeReasonDesc: z.string().optional().nullable()
}).strict();

export type dictAdvWithoutInvExcludeReasonInputType = z.infer<typeof dictAdvWithoutInvExcludeReasonInputSchema>;
