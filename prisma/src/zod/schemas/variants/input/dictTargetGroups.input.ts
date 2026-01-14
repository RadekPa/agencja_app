import * as z from 'zod';
// prettier-ignore
export const dictTargetGroupsInputSchema = z.object({
    TargetGroupID: z.number(),
    TargetGroupDesc: z.string().optional().nullable()
}).strict();

export type dictTargetGroupsInputType = z.infer<typeof dictTargetGroupsInputSchema>;
