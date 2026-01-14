import * as z from 'zod';
export const dictAgrTemplatesCreateResultSchema = z.object({
  Name: z.string(),
  FileName: z.string()
});