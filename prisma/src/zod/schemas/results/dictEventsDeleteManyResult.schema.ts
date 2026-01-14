import * as z from 'zod';
export const dictEventsDeleteManyResultSchema = z.object({
  count: z.number()
});