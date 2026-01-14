import * as z from 'zod';
// prettier-ignore
export const tblPdoxInvMatResultSchema = z.object({
    Invoice_Nr: z.number().int(),
    Title: z.string().nullable(),
    ISBN: z.string().nullable()
}).strict();

export type tblPdoxInvMatResultType = z.infer<typeof tblPdoxInvMatResultSchema>;
