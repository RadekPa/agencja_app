import * as z from 'zod';
export const dictAdvTypeUpdateResultSchema = z.nullable(z.object({
  AdvTypeId: z.number().int(),
  AdvTypeDesc: z.string().optional(),
  AdvTypeDescPL: z.string().optional()
}));