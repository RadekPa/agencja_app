import * as z from 'zod';
export const dictTargetGroupsFindFirstResultSchema = z.nullable(z.object({
  TargetGroupID: z.number(),
  TargetGroupDesc: z.string().optional()
}));