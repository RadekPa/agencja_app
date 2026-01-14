import * as z from 'zod';
export const dictDistributionTypeGroupByResultSchema = z.array(z.object({
  DistID: z.number().int(),
  DistDesc: z.string(),
  _count: z.object({
    DistID: z.number(),
    DistDesc: z.number(),
    tblAgrRights: z.number()
  }).optional(),
  _sum: z.object({
    DistID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    DistID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    DistID: z.number().int().nullable(),
    DistDesc: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    DistID: z.number().int().nullable(),
    DistDesc: z.string().nullable()
  }).nullable().optional()
}));