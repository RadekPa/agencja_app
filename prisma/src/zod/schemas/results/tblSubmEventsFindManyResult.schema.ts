import * as z from 'zod';
export const tblSubmEventsFindManyResultSchema = z.object({
  data: z.array(z.object({
  SubmEventID: z.number(),
  SubmID: z.number().int().optional(),
  EventCode: z.number().int().optional(),
  EventDate: z.date(),
  NoOfCopies: z.number().int().optional(),
  EndDate: z.date().optional(),
  tblSubmissions: z.unknown().optional(),
  dictEvents: z.unknown().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});