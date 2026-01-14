import * as z from 'zod';
// prettier-ignore
export const tblTitAuthorsInputSchema = z.object({
    AuthorID: z.number().int(),
    TitleID: z.number().int(),
    Main: z.number().int().optional().nullable(),
    Lp: z.number().int(),
    tblAuthors: z.unknown(),
    tblTitles: z.unknown()
}).strict();

export type tblTitAuthorsInputType = z.infer<typeof tblTitAuthorsInputSchema>;
