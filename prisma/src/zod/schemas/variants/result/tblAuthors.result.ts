import * as z from 'zod';
// prettier-ignore
export const tblAuthorsResultSchema = z.object({
    AuthorID: z.number().int(),
    FullName: z.string().nullable(),
    FirstName: z.string().nullable(),
    MiddleName: z.string().nullable(),
    LastName: z.string().nullable(),
    Suffix: z.string().nullable(),
    PenName: z.string().nullable(),
    UserMod: z.string(),
    DateMod: z.date(),
    Remarks: z.string().nullable(),
    tblTitAuthors: z.array(z.unknown())
}).strict();

export type tblAuthorsResultType = z.infer<typeof tblAuthorsResultSchema>;
