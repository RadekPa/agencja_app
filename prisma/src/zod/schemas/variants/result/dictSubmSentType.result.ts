import * as z from 'zod';
// prettier-ignore
export const dictSubmSentTypeResultSchema = z.object({
    SubmSentTypeID: z.number().int(),
    SubmSentType: z.string(),
    tblSubmissions: z.array(z.unknown())
}).strict();

export type dictSubmSentTypeResultType = z.infer<typeof dictSubmSentTypeResultSchema>;
