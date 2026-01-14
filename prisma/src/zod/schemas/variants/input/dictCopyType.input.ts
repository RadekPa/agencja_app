import * as z from 'zod';
// prettier-ignore
export const dictCopyTypeInputSchema = z.object({
    CopyTypeID: z.number().int(),
    CopyType: z.string().optional().nullable(),
    tblSubmissions: z.array(z.unknown()),
    tblTitEvents: z.array(z.unknown())
}).strict();

export type dictCopyTypeInputType = z.infer<typeof dictCopyTypeInputSchema>;
