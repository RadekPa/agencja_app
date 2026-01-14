import * as z from 'zod';
export const ArTypeFindFirstResultSchema = z.nullable(z.object({
  ArType: z.string(),
  ArTypeDescription: z.string().optional(),
  ArTypeDescriptionPL: z.string().optional()
}));