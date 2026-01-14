import * as z from 'zod';
export const ArApplyGroupByResultSchema = z.array(z.object({
  ApplyID: z.number().int(),
  DebitID: z.number().int(),
  CreditID: z.number().int(),
  TaxPerc: z.number(),
  TaxAmt: z.number(),
  AmtApplied: z.number(),
  GraalPerc: z.number(),
  GraalAmt: z.number(),
  Notes: z.string(),
  ApplyDate: z.date(),
  TaxSet: z.boolean(),
  _count: z.object({
    ApplyID: z.number(),
    DebitID: z.number(),
    CreditID: z.number(),
    TaxPerc: z.number(),
    TaxAmt: z.number(),
    AmtApplied: z.number(),
    GraalPerc: z.number(),
    GraalAmt: z.number(),
    Notes: z.number(),
    ApplyDate: z.number(),
    TaxSet: z.number(),
    ArTransaction: z.number()
  }).optional(),
  _sum: z.object({
    ApplyID: z.number().nullable(),
    DebitID: z.number().nullable(),
    CreditID: z.number().nullable(),
    TaxPerc: z.number().nullable(),
    TaxAmt: z.number().nullable(),
    AmtApplied: z.number().nullable(),
    GraalPerc: z.number().nullable(),
    GraalAmt: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    ApplyID: z.number().nullable(),
    DebitID: z.number().nullable(),
    CreditID: z.number().nullable(),
    TaxPerc: z.number().nullable(),
    TaxAmt: z.number().nullable(),
    AmtApplied: z.number().nullable(),
    GraalPerc: z.number().nullable(),
    GraalAmt: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    ApplyID: z.number().int().nullable(),
    DebitID: z.number().int().nullable(),
    CreditID: z.number().int().nullable(),
    TaxPerc: z.number().nullable(),
    TaxAmt: z.number().nullable(),
    AmtApplied: z.number().nullable(),
    GraalPerc: z.number().nullable(),
    GraalAmt: z.number().nullable(),
    Notes: z.string().nullable(),
    ApplyDate: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    ApplyID: z.number().int().nullable(),
    DebitID: z.number().int().nullable(),
    CreditID: z.number().int().nullable(),
    TaxPerc: z.number().nullable(),
    TaxAmt: z.number().nullable(),
    AmtApplied: z.number().nullable(),
    GraalPerc: z.number().nullable(),
    GraalAmt: z.number().nullable(),
    Notes: z.string().nullable(),
    ApplyDate: z.date().nullable()
  }).nullable().optional()
}));