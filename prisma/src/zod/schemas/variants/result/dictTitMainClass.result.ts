import * as z from 'zod';
// prettier-ignore
export const dictTitMainClassResultSchema = z.object({
    ClassCode: z.string(),
    ClassDesc: z.string().nullable(),
    dictTitSubClass: z.array(z.unknown()),
    tblMailingLists: z.array(z.unknown()),
    tblTitles: z.array(z.unknown())
}).strict();

export type dictTitMainClassResultType = z.infer<typeof dictTitMainClassResultSchema>;
