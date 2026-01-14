import * as z from 'zod';
// prettier-ignore
export const dictTitSubClassInputSchema = z.object({
    SubClassCode: z.string(),
    ClassCode: z.string().optional().nullable(),
    SubClassDesc: z.string().optional().nullable(),
    dictTitMainClass: z.unknown().optional().nullable(),
    tblMailingLists: z.array(z.unknown()),
    tblTitSubClass: z.array(z.unknown())
}).strict();

export type dictTitSubClassInputType = z.infer<typeof dictTitSubClassInputSchema>;
