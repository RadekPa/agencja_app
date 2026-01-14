import * as z from 'zod';
// prettier-ignore
export const tblPdoxInvMatInputSchema = z.object({
    Invoice_Nr: z.number().int(),
    Title: z.string().optional().nullable(),
    ISBN: z.string().optional().nullable()
}).strict();

export type tblPdoxInvMatInputType = z.infer<typeof tblPdoxInvMatInputSchema>;
