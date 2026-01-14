import * as z from 'zod';
// prettier-ignore
export const dictSubmSentTypeModelSchema = z.object({
    SubmSentTypeID: z.number().int(),
    SubmSentType: z.string(),
    tblSubmissions: z.array(z.unknown())
}).strict();

export type dictSubmSentTypePureType = z.infer<typeof dictSubmSentTypeModelSchema>;
