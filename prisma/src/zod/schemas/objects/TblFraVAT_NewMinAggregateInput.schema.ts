import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  FVNr: z.literal(true).optional(),
  FVDate: z.literal(true).optional(),
  FVDateIssued: z.literal(true).optional(),
  FVType: z.literal(true).optional(),
  CustID: z.literal(true).optional(),
  OrigCurrency: z.literal(true).optional(),
  FVCurrency: z.literal(true).optional(),
  GraalPerc: z.literal(true).optional(),
  VATCode: z.literal(true).optional(),
  VatPerc: z.literal(true).optional(),
  NetAmt: z.literal(true).optional(),
  NetAmtCurr: z.literal(true).optional(),
  VatAmt: z.literal(true).optional(),
  XRate: z.literal(true).optional(),
  VatAmtCurr: z.literal(true).optional(),
  GrossAmt: z.literal(true).optional(),
  InvNr: z.literal(true).optional(),
  InvAmt: z.literal(true).optional(),
  Title: z.literal(true).optional(),
  ISBNNr: z.literal(true).optional(),
  PayType: z.literal(true).optional(),
  InvType: z.literal(true).optional(),
  FVDescription: z.literal(true).optional(),
  BilNr: z.literal(true).optional(),
  OrigFVNr: z.literal(true).optional(),
  CorrectFVNr: z.literal(true).optional(),
  CreditID: z.literal(true).optional(),
  ApplyID: z.literal(true).optional(),
  PayDate: z.literal(true).optional(),
  EnterDate: z.literal(true).optional(),
  EnterEmployee: z.literal(true).optional(),
  Status: z.literal(true).optional()
}).strict();
export const TblFraVAT_NewMinAggregateInputObjectSchema: z.ZodType<Prisma.TblFraVAT_NewMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblFraVAT_NewMinAggregateInputType>;
export const TblFraVAT_NewMinAggregateInputObjectZodSchema = makeSchema();
