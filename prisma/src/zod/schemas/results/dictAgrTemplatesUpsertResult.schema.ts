import * as z from 'zod';
export const dictAgrTemplatesUpsertResultSchema = z.object({
  Name: z.string(),
  FileName: z.string()
});