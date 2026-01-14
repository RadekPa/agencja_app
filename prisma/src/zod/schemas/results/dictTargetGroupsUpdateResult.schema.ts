import * as z from 'zod';
export const dictTargetGroupsUpdateResultSchema = z.nullable(z.object({
  TargetGroupID: z.number(),
  TargetGroupDesc: z.string().optional()
}));