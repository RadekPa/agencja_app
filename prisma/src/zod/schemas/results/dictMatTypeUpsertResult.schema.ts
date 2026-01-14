import * as z from 'zod';
export const dictMatTypeUpsertResultSchema = z.object({
  MatTypeID: z.number().int(),
  MatTypeDesc: z.string(),
  MatTypeDescPL: z.string().optional()
});