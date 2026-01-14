import * as z from 'zod';
export const dictTargetGroupsUpsertResultSchema = z.object({
  TargetGroupID: z.number(),
  TargetGroupDesc: z.string().optional()
});