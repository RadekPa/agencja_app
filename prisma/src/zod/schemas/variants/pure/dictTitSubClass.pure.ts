import * as z from 'zod';
// prettier-ignore
export const dictTitSubClassModelSchema = z.object({
    SubClassCode: z.string(),
    ClassCode: z.string().nullable(),
    SubClassDesc: z.string().nullable(),
    dictTitMainClass: z.unknown().nullable(),
    tblMailingLists: z.array(z.unknown()),
    tblTitSubClass: z.array(z.unknown())
}).strict();

export type dictTitSubClassPureType = z.infer<typeof dictTitSubClassModelSchema>;
