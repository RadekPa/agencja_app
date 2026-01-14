import * as z from 'zod';
// prettier-ignore
export const tblCertPubInputSchema = z.object({
    ClientID: z.number().int(),
    Year: z.number().int(),
    PubID: z.number().int(),
    DateSent: z.date().optional().nullable(),
    Original: z.boolean().optional().nullable()
}).strict();

export type tblCertPubInputType = z.infer<typeof tblCertPubInputSchema>;
