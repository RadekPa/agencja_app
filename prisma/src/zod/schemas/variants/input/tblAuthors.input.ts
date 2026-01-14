import * as z from 'zod';
// prettier-ignore
export const tblAuthorsInputSchema = z.object({
    AuthorID: z.number().int(),
    FullName: z.string().optional().nullable(),
    FirstName: z.string().optional().nullable(),
    MiddleName: z.string().optional().nullable(),
    LastName: z.string().optional().nullable(),
    Suffix: z.string().optional().nullable(),
    PenName: z.string().optional().nullable(),
    UserMod: z.string(),
    DateMod: z.date(),
    Remarks: z.string().optional().nullable(),
    tblTitAuthors: z.array(z.unknown())
}).strict();

export type tblAuthorsInputType = z.infer<typeof tblAuthorsInputSchema>;
