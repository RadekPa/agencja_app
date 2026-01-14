import * as z from 'zod';
export const dictTargetGroupsGroupByResultSchema = z.array(z.object({
  TargetGroupID: z.number(),
  TargetGroupDesc: z.string(),
  _count: z.object({
    TargetGroupID: z.number(),
    TargetGroupDesc: z.number()
  }).optional(),
  _sum: z.object({
    TargetGroupID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    TargetGroupID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    TargetGroupID: z.number().nullable(),
    TargetGroupDesc: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    TargetGroupID: z.number().nullable(),
    TargetGroupDesc: z.string().nullable()
  }).nullable().optional()
}));