import * as z from 'zod';
export const tblPersonLoginDeleteResultSchema = z.nullable(z.object({
  PersonID: z.number().int(),
  Login: z.string(),
  DateBegin: z.date().optional(),
  DateEnd: z.date().optional()
}));