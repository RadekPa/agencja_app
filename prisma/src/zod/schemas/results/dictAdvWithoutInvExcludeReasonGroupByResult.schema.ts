import * as z from 'zod';
export const dictAdvWithoutInvExcludeReasonGroupByResultSchema = z.array(z.object({
  ExcludeReasonID: z.number().int(),
  ExcludeReasonCode: z.string(),
  ExcludeReasonDesc: z.string(),
  _count: z.object({
    ExcludeReasonID: z.number(),
    ExcludeReasonCode: z.number(),
    ExcludeReasonDesc: z.number()
  }).optional(),
  _sum: z.object({
    ExcludeReasonID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    ExcludeReasonID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    ExcludeReasonID: z.number().int().nullable(),
    ExcludeReasonCode: z.string().nullable(),
    ExcludeReasonDesc: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    ExcludeReasonID: z.number().int().nullable(),
    ExcludeReasonCode: z.string().nullable(),
    ExcludeReasonDesc: z.string().nullable()
  }).nullable().optional()
}));