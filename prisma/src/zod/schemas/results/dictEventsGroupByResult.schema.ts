import * as z from 'zod';
export const dictEventsGroupByResultSchema = z.array(z.object({
  EventCode: z.number().int(),
  EventDesc: z.string(),
  _count: z.object({
    EventCode: z.number(),
    EventDesc: z.number(),
    tblSubmEvents: z.number(),
    tblTitEvents: z.number()
  }).optional(),
  _sum: z.object({
    EventCode: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    EventCode: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    EventCode: z.number().int().nullable(),
    EventDesc: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    EventCode: z.number().int().nullable(),
    EventDesc: z.string().nullable()
  }).nullable().optional()
}));