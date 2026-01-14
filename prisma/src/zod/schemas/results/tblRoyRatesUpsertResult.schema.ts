import * as z from 'zod';
export const tblRoyRatesUpsertResultSchema = z.object({
  Step: z.number().int(),
  AgrRightID: z.number().int(),
  AgrID: z.number().int().optional(),
  CpsMax: z.number().int().optional(),
  Rate: z.number().optional(),
  tblAgreements: z.unknown().optional(),
  tblAgrRights: z.unknown()
});