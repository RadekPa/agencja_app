import * as z from 'zod';
export const dictTargetGroupsDeleteResultSchema = z.nullable(z.object({
  TargetGroupID: z.number(),
  TargetGroupDesc: z.string().optional()
}));