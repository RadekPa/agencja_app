import * as z from 'zod';
export const tblPersonLoginCreateResultSchema = z.object({
  PersonID: z.number().int(),
  Login: z.string(),
  DateBegin: z.date().optional(),
  DateEnd: z.date().optional()
});