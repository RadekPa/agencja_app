import * as z from 'zod';
export const ArTypeCreateResultSchema = z.object({
  ArType: z.string(),
  ArTypeDescription: z.string().optional(),
  ArTypeDescriptionPL: z.string().optional()
});