import * as z from 'zod';
// prettier-ignore
export const dictDistributionTypeResultSchema = z.object({
    DistID: z.number().int(),
    DistDesc: z.string(),
    tblAgrRights: z.array(z.unknown())
}).strict();

export type dictDistributionTypeResultType = z.infer<typeof dictDistributionTypeResultSchema>;
