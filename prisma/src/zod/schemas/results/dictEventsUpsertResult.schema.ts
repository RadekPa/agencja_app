import * as z from 'zod';
export const dictEventsUpsertResultSchema = z.object({
  EventCode: z.number().int(),
  EventDesc: z.string(),
  tblSubmEvents: z.array(z.unknown()),
  tblTitEvents: z.array(z.unknown())
});