import * as z from 'zod';
// prettier-ignore
export const dictCoverFormatInputSchema = z.object({
    CoverFormatID: z.number().int(),
    CoverFormatDesc: z.string(),
    tblTitles: z.array(z.unknown())
}).strict();

export type dictCoverFormatInputType = z.infer<typeof dictCoverFormatInputSchema>;
