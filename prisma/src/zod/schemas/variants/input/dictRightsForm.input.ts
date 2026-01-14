import * as z from 'zod';
// prettier-ignore
export const dictRightsFormInputSchema = z.object({
    RightFormID: z.number().int(),
    RightFormDesc: z.string(),
    RightFormPL: z.string().optional().nullable(),
    RightFormAbbPL: z.string().optional().nullable(),
    RightFormAbbEN: z.string().optional().nullable(),
    tblAgrRights: z.array(z.unknown())
}).strict();

export type dictRightsFormInputType = z.infer<typeof dictRightsFormInputSchema>;
