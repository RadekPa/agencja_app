import * as z from 'zod';
export const dictAgrEventsGroupByResultSchema = z.array(z.object({
  AgrEventCode: z.number().int(),
  AgrEventDesc: z.string(),
  Status: z.string(),
  _count: z.object({
    AgrEventCode: z.number(),
    AgrEventDesc: z.number(),
    Status: z.number(),
    tblAgrEvents: z.number()
  }).optional(),
  _sum: z.object({
    AgrEventCode: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    AgrEventCode: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    AgrEventCode: z.number().int().nullable(),
    AgrEventDesc: z.string().nullable(),
    Status: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    AgrEventCode: z.number().int().nullable(),
    AgrEventDesc: z.string().nullable(),
    Status: z.string().nullable()
  }).nullable().optional()
}));