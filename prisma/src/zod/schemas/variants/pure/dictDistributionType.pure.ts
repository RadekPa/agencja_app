import * as z from 'zod';
// prettier-ignore
export const dictDistributionTypeModelSchema = z.object({
    DistID: z.number().int(),
    DistDesc: z.string(),
    tblAgrRights: z.array(z.unknown())
}).strict();

export type dictDistributionTypePureType = z.infer<typeof dictDistributionTypeModelSchema>;
