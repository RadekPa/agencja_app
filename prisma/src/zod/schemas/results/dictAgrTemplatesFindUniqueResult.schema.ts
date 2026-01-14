import * as z from 'zod';
export const dictAgrTemplatesFindUniqueResultSchema = z.nullable(z.object({
  Name: z.string(),
  FileName: z.string()
}));