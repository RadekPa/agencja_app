import * as z from 'zod';
// prettier-ignore
export const tblTitAuxInputSchema = z.object({
    TitleID: z.number().int(),
    CopyrightLine: z.string().optional().nullable(),
    tblTitles: z.unknown()
}).strict();

export type tblTitAuxInputType = z.infer<typeof tblTitAuxInputSchema>;
