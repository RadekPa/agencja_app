import * as z from 'zod';
// prettier-ignore
export const tblPubLocalResultSchema = z.object({
    PubLocalID: z.number().int(),
    AgrID: z.number().int().nullable(),
    LocalTitle: z.string().nullable(),
    PubDate: z.date().nullable(),
    LocalISBN: z.string().nullable(),
    Printrun: z.number().int().nullable(),
    LocalEdition: z.number().int().nullable(),
    tblAgreements: z.unknown().nullable()
}).strict();

export type tblPubLocalResultType = z.infer<typeof tblPubLocalResultSchema>;
