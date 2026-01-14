import * as z from 'zod';
export const dictSubmSentTypeDeleteResultSchema = z.nullable(z.object({
  SubmSentTypeID: z.number().int(),
  SubmSentType: z.string(),
  tblSubmissions: z.array(z.unknown())
}));