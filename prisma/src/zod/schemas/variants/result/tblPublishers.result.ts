import * as z from 'zod';
// prettier-ignore
export const tblPublishersResultSchema = z.object({
    PubID: z.number(),
    PubName: z.string().nullable(),
    PubAbb: z.string().nullable(),
    ParentPubID: z.number().nullable(),
    tblPubISBN: z.array(z.unknown())
}).strict();

export type tblPublishersResultType = z.infer<typeof tblPublishersResultSchema>;
