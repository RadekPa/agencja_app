import * as z from 'zod';
export const ArApplyFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});