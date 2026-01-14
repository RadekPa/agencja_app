import * as z from 'zod';
export const ArTransactionTypeFindUniqueResultSchema = z.nullable(z.object({
  ArType: z.number().int(),
  ArTypeDescription: z.string().optional(),
  ArTypeDescriptionPL: z.string().optional()
}));