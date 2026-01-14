import * as z from 'zod';
// prettier-ignore
export const tblPubLocalInputSchema = z.object({
    PubLocalID: z.number().int(),
    AgrID: z.number().int().optional().nullable(),
    LocalTitle: z.string().optional().nullable(),
    PubDate: z.date().optional().nullable(),
    LocalISBN: z.string().optional().nullable(),
    Printrun: z.number().int().optional().nullable(),
    LocalEdition: z.number().int().optional().nullable(),
    tblAgreements: z.unknown().optional().nullable()
}).strict();

export type tblPubLocalInputType = z.infer<typeof tblPubLocalInputSchema>;
