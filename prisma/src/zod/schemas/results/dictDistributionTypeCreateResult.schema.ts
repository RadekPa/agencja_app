import * as z from 'zod';
export const dictDistributionTypeCreateResultSchema = z.object({
  DistID: z.number().int(),
  DistDesc: z.string(),
  tblAgrRights: z.array(z.unknown())
});