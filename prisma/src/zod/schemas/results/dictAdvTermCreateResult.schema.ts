import * as z from 'zod';
export const dictAdvTermCreateResultSchema = z.object({
  AdvTermId: z.number().int(),
  AdvTermDesc: z.string().optional(),
  AdvTermPL: z.string().optional()
});