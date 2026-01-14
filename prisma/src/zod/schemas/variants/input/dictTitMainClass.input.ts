import * as z from 'zod';
// prettier-ignore
export const dictTitMainClassInputSchema = z.object({
    ClassCode: z.string(),
    ClassDesc: z.string().optional().nullable(),
    dictTitSubClass: z.array(z.unknown()),
    tblMailingLists: z.array(z.unknown()),
    tblTitles: z.array(z.unknown())
}).strict();

export type dictTitMainClassInputType = z.infer<typeof dictTitMainClassInputSchema>;
