import * as z from 'zod';
export const ArTypeDeleteResultSchema = z.nullable(z.object({
  ArType: z.string(),
  ArTypeDescription: z.string().optional(),
  ArTypeDescriptionPL: z.string().optional()
}));