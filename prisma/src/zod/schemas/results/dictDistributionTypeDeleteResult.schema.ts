import * as z from 'zod';
export const dictDistributionTypeDeleteResultSchema = z.nullable(z.object({
  DistID: z.number().int(),
  DistDesc: z.string(),
  tblAgrRights: z.array(z.unknown())
}));