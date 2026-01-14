import * as z from 'zod';
export const dictAdvTypeCreateResultSchema = z.object({
  AdvTypeId: z.number().int(),
  AdvTypeDesc: z.string().optional(),
  AdvTypeDescPL: z.string().optional()
});