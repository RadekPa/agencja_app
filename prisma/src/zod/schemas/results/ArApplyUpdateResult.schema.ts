import * as z from 'zod';
export const ArApplyUpdateResultSchema = z.nullable(z.object({
  ApplyID: z.number().int(),
  DebitID: z.number().int(),
  CreditID: z.number().int(),
  TaxPerc: z.number().optional(),
  TaxAmt: z.number().optional(),
  AmtApplied: z.number().optional(),
  GraalPerc: z.number().optional(),
  GraalAmt: z.number().optional(),
  Notes: z.string().optional(),
  ApplyDate: z.date().optional(),
  TaxSet: z.boolean().optional(),
  ArTransaction: z.unknown()
}));