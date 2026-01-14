import * as z from 'zod';
// prettier-ignore
export const dictRightsFormResultSchema = z.object({
    RightFormID: z.number().int(),
    RightFormDesc: z.string(),
    RightFormPL: z.string().nullable(),
    RightFormAbbPL: z.string().nullable(),
    RightFormAbbEN: z.string().nullable(),
    tblAgrRights: z.array(z.unknown())
}).strict();

export type dictRightsFormResultType = z.infer<typeof dictRightsFormResultSchema>;
