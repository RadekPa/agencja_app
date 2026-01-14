import * as z from 'zod';
export const ArTypeFindUniqueResultSchema = z.nullable(z.object({
  ArType: z.string(),
  ArTypeDescription: z.string().optional(),
  ArTypeDescriptionPL: z.string().optional()
}));