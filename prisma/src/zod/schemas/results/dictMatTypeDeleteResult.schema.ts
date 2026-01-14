import * as z from 'zod';
export const dictMatTypeDeleteResultSchema = z.nullable(z.object({
  MatTypeID: z.number().int(),
  MatTypeDesc: z.string(),
  MatTypeDescPL: z.string().optional()
}));