import * as z from 'zod';
// prettier-ignore
export const dictTargetGroupsResultSchema = z.object({
    TargetGroupID: z.number(),
    TargetGroupDesc: z.string().nullable()
}).strict();

export type dictTargetGroupsResultType = z.infer<typeof dictTargetGroupsResultSchema>;
