import * as z from 'zod';
export const dictAgrTemplatesUpdateResultSchema = z.nullable(z.object({
  Name: z.string(),
  FileName: z.string()
}));