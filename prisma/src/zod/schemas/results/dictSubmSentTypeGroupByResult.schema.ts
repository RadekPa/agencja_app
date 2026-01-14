import * as z from 'zod';
export const dictSubmSentTypeGroupByResultSchema = z.array(z.object({
  SubmSentTypeID: z.number().int(),
  SubmSentType: z.string(),
  _count: z.object({
    SubmSentTypeID: z.number(),
    SubmSentType: z.number(),
    tblSubmissions: z.number()
  }).optional(),
  _sum: z.object({
    SubmSentTypeID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    SubmSentTypeID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    SubmSentTypeID: z.number().int().nullable(),
    SubmSentType: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    SubmSentTypeID: z.number().int().nullable(),
    SubmSentType: z.string().nullable()
  }).nullable().optional()
}));