import * as z from 'zod';
// prettier-ignore
export const tblPubISBNInputSchema = z.object({
    PubID: z.number(),
    PubISBN1: z.string(),
    PubISBN2: z.string(),
    tblPublishers: z.unknown()
}).strict();

export type tblPubISBNInputType = z.infer<typeof tblPubISBNInputSchema>;
