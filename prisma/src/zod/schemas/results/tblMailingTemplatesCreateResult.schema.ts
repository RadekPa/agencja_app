import * as z from 'zod';
export const tblMailingTemplatesCreateResultSchema = z.object({
  TempID: z.number().int(),
  TempName: z.string(),
  TempPath: z.string(),
  TempSubject: z.string()
});