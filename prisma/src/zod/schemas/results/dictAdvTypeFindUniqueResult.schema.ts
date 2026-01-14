import * as z from 'zod';
export const dictAdvTypeFindUniqueResultSchema = z.nullable(z.object({
  AdvTypeId: z.number().int(),
  AdvTypeDesc: z.string().optional(),
  AdvTypeDescPL: z.string().optional()
}));