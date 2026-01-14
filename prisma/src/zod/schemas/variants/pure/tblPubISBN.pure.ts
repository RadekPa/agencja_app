import * as z from 'zod';
// prettier-ignore
export const tblPubISBNModelSchema = z.object({
    PubID: z.number(),
    PubISBN1: z.string(),
    PubISBN2: z.string(),
    tblPublishers: z.unknown()
}).strict();

export type tblPubISBNPureType = z.infer<typeof tblPubISBNModelSchema>;
