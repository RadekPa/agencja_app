import * as z from 'zod';
// prettier-ignore
export const tblTitAuxModelSchema = z.object({
    TitleID: z.number().int(),
    CopyrightLine: z.string().nullable(),
    tblTitles: z.unknown()
}).strict();

export type tblTitAuxPureType = z.infer<typeof tblTitAuxModelSchema>;
