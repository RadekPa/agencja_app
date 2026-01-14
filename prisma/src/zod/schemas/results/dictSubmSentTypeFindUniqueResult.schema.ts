import * as z from 'zod';
export const dictSubmSentTypeFindUniqueResultSchema = z.nullable(z.object({
  SubmSentTypeID: z.number().int(),
  SubmSentType: z.string(),
  tblSubmissions: z.array(z.unknown())
}));