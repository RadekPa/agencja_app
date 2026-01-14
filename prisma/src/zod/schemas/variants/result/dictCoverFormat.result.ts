import * as z from 'zod';
// prettier-ignore
export const dictCoverFormatResultSchema = z.object({
    CoverFormatID: z.number().int(),
    CoverFormatDesc: z.string(),
    tblTitles: z.array(z.unknown())
}).strict();

export type dictCoverFormatResultType = z.infer<typeof dictCoverFormatResultSchema>;
