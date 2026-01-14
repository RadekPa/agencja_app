import * as z from 'zod';
// prettier-ignore
export const dictSubmSentTypeInputSchema = z.object({
    SubmSentTypeID: z.number().int(),
    SubmSentType: z.string(),
    tblSubmissions: z.array(z.unknown())
}).strict();

export type dictSubmSentTypeInputType = z.infer<typeof dictSubmSentTypeInputSchema>;
