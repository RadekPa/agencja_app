import * as z from 'zod';
// prettier-ignore
export const tblTitSubClassResultSchema = z.object({
    SubClassCode: z.string(),
    TitleID: z.number().int(),
    tblTitles: z.unknown(),
    dictTitSubClass: z.unknown()
}).strict();

export type tblTitSubClassResultType = z.infer<typeof tblTitSubClassResultSchema>;
