import * as z from 'zod';
// prettier-ignore
export const tblTitSubClassInputSchema = z.object({
    SubClassCode: z.string(),
    TitleID: z.number().int(),
    tblTitles: z.unknown(),
    dictTitSubClass: z.unknown()
}).strict();

export type tblTitSubClassInputType = z.infer<typeof tblTitSubClassInputSchema>;
