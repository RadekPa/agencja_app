import * as z from 'zod';
export const dictAgrTemplatesDeleteResultSchema = z.nullable(z.object({
  Name: z.string(),
  FileName: z.string()
}));