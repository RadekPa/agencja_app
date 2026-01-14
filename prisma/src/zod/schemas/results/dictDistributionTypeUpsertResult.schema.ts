import * as z from 'zod';
export const dictDistributionTypeUpsertResultSchema = z.object({
  DistID: z.number().int(),
  DistDesc: z.string(),
  tblAgrRights: z.array(z.unknown())
});