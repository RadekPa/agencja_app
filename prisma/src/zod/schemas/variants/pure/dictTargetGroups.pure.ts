import * as z from 'zod';
// prettier-ignore
export const dictTargetGroupsModelSchema = z.object({
    TargetGroupID: z.number(),
    TargetGroupDesc: z.string().nullable()
}).strict();

export type dictTargetGroupsPureType = z.infer<typeof dictTargetGroupsModelSchema>;
