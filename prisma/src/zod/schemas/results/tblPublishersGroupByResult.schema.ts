import * as z from 'zod';
export const tblPublishersGroupByResultSchema = z.array(z.object({
  PubID: z.number(),
  PubName: z.string(),
  PubAbb: z.string(),
  ParentPubID: z.number(),
  _count: z.object({
    PubID: z.number(),
    PubName: z.number(),
    PubAbb: z.number(),
    ParentPubID: z.number(),
    tblPubISBN: z.number()
  }).optional(),
  _sum: z.object({
    PubID: z.number().nullable(),
    ParentPubID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    PubID: z.number().nullable(),
    ParentPubID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    PubID: z.number().nullable(),
    PubName: z.string().nullable(),
    PubAbb: z.string().nullable(),
    ParentPubID: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    PubID: z.number().nullable(),
    PubName: z.string().nullable(),
    PubAbb: z.string().nullable(),
    ParentPubID: z.number().nullable()
  }).nullable().optional()
}));