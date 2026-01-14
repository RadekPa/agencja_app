import * as z from 'zod';
export const dictAgrTemplatesFindFirstResultSchema = z.nullable(z.object({
  Name: z.string(),
  FileName: z.string()
}));