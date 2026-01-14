import * as z from 'zod';
export const dictTargetGroupsFindUniqueResultSchema = z.nullable(z.object({
  TargetGroupID: z.number(),
  TargetGroupDesc: z.string().optional()
}));