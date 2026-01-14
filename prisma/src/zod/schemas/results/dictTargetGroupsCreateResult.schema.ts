import * as z from 'zod';
export const dictTargetGroupsCreateResultSchema = z.object({
  TargetGroupID: z.number(),
  TargetGroupDesc: z.string().optional()
});