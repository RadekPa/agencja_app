import * as z from 'zod';
// prettier-ignore
export const tblPubISBNResultSchema = z.object({
    PubID: z.number(),
    PubISBN1: z.string(),
    PubISBN2: z.string(),
    tblPublishers: z.unknown()
}).strict();

export type tblPubISBNResultType = z.infer<typeof tblPubISBNResultSchema>;
