import * as z from 'zod';
export const tblAdvanceUpsertResultSchema = z.object({
  AdvID: z.number().int(),
  Inst: z.number().int(),
  AgrID: z.number().int(),
  AdvTermId: z.number().int().optional(),
  AdvTypeId: z.number().int().optional(),
  Amount: z.number().optional(),
  AdvTermDate: z.date().optional(),
  RoyID: z.number().int().optional(),
  tblAgreements: z.unknown()
});