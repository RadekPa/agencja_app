import * as z from 'zod';
export const tblMailingTemplatesDeleteResultSchema = z.nullable(z.object({
  TempID: z.number().int(),
  TempName: z.string(),
  TempPath: z.string(),
  TempSubject: z.string()
}));