import * as z from 'zod';
// prettier-ignore
export const tblPublishersInputSchema = z.object({
    PubID: z.number(),
    PubName: z.string().optional().nullable(),
    PubAbb: z.string().optional().nullable(),
    ParentPubID: z.number().optional().nullable(),
    tblPubISBN: z.array(z.unknown())
}).strict();

export type tblPublishersInputType = z.infer<typeof tblPublishersInputSchema>;
