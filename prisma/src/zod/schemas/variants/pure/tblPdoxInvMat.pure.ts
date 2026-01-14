import * as z from 'zod';
// prettier-ignore
export const tblPdoxInvMatModelSchema = z.object({
    Invoice_Nr: z.number().int(),
    Title: z.string().nullable(),
    ISBN: z.string().nullable()
}).strict();

export type tblPdoxInvMatPureType = z.infer<typeof tblPdoxInvMatModelSchema>;
