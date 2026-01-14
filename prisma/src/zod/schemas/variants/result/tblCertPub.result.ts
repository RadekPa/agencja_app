import * as z from 'zod';
// prettier-ignore
export const tblCertPubResultSchema = z.object({
    ClientID: z.number().int(),
    Year: z.number().int(),
    PubID: z.number().int(),
    DateSent: z.date().nullable(),
    Original: z.boolean().nullable()
}).strict();

export type tblCertPubResultType = z.infer<typeof tblCertPubResultSchema>;
