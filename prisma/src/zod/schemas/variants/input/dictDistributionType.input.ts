import * as z from 'zod';
// prettier-ignore
export const dictDistributionTypeInputSchema = z.object({
    DistID: z.number().int(),
    DistDesc: z.string(),
    tblAgrRights: z.array(z.unknown())
}).strict();

export type dictDistributionTypeInputType = z.infer<typeof dictDistributionTypeInputSchema>;
