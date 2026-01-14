import * as z from 'zod';
// prettier-ignore
export const tblTitAuthorsResultSchema = z.object({
    AuthorID: z.number().int(),
    TitleID: z.number().int(),
    Main: z.number().int().nullable(),
    Lp: z.number().int(),
    tblAuthors: z.unknown(),
    tblTitles: z.unknown()
}).strict();

export type tblTitAuthorsResultType = z.infer<typeof tblTitAuthorsResultSchema>;
