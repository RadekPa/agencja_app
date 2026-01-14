import * as z from 'zod';
// prettier-ignore
export const tblTitAuxResultSchema = z.object({
    TitleID: z.number().int(),
    CopyrightLine: z.string().nullable(),
    tblTitles: z.unknown()
}).strict();

export type tblTitAuxResultType = z.infer<typeof tblTitAuxResultSchema>;
