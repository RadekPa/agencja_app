import * as z from 'zod';
export const tblRoyaltyFindUniqueResultSchema = z.nullable(z.object({
  RoyID: z.number().int(),
  AgrID: z.number().int(),
  AgrRightID: z.number().int(),
  RoyNr: z.number().int(),
  EnterDate: z.date().optional(),
  RoyDate: z.date().optional(),
  Copies: z.number().int().optional(),
  Price: z.number().optional(),
  RoyRate: z.number().optional(),
  XRate: z.number().optional(),
  ThisRoy: z.number().optional(),
  AdvLeft: z.number().optional(),
  RoyDue: z.number().optional(),
  Pay: z.number().optional(),
  AdvID: z.number().int().optional(),
  tblAgreements: z.unknown()
}));