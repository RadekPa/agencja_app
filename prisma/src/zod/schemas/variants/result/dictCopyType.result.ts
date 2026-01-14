import * as z from 'zod';
// prettier-ignore
export const dictCopyTypeResultSchema = z.object({
    CopyTypeID: z.number().int(),
    CopyType: z.string().nullable(),
    tblSubmissions: z.array(z.unknown()),
    tblTitEvents: z.array(z.unknown())
}).strict();

export type dictCopyTypeResultType = z.infer<typeof dictCopyTypeResultSchema>;
