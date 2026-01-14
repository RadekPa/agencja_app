import * as z from 'zod';
export const tblClients_obsoleteCreateResultSchema = z.object({
  CustID: z.number().int(),
  RepModeID: z.number().int().optional(),
  GraalID: z.number().int().optional(),
  Commission: z.number().optional(),
  DefAgrDoc: z.string().optional(),
  Jurisdiction: z.string().optional(),
  tblCustomers: z.unknown(),
  dictRepModes: z.unknown().optional()
});