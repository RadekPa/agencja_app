import * as z from 'zod';
export const tblSubmEventsUpsertResultSchema = z.object({
  SubmEventID: z.number(),
  SubmID: z.number().int().optional(),
  EventCode: z.number().int().optional(),
  EventDate: z.date(),
  NoOfCopies: z.number().int().optional(),
  EndDate: z.date().optional(),
  tblSubmissions: z.unknown().optional(),
  dictEvents: z.unknown().optional()
});