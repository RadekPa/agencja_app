import * as z from 'zod';
// prettier-ignore
export const dictCoverFormatModelSchema = z.object({
    CoverFormatID: z.number().int(),
    CoverFormatDesc: z.string(),
    tblTitles: z.array(z.unknown())
}).strict();

export type dictCoverFormatPureType = z.infer<typeof dictCoverFormatModelSchema>;
