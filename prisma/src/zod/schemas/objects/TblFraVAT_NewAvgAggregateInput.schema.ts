import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  FVNr: z.literal(true).optional(),
  FVType: z.literal(true).optional(),
  CustID: z.literal(true).optional(),
  GraalPerc: z.literal(true).optional(),
  VatPerc: z.literal(true).optional(),
  NetAmt: z.literal(true).optional(),
  NetAmtCurr: z.literal(true).optional(),
  VatAmt: z.literal(true).optional(),
  XRate: z.literal(true).optional(),
  VatAmtCurr: z.literal(true).optional(),
  GrossAmt: z.literal(true).optional(),
  InvNr: z.literal(true).optional(),
  InvAmt: z.literal(true).optional(),
  BilNr: z.literal(true).optional(),
  OrigFVNr: z.literal(true).optional(),
  CorrectFVNr: z.literal(true).optional(),
  CreditID: z.literal(true).optional(),
  ApplyID: z.literal(true).optional()
}).strict();
export const TblFraVAT_NewAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblFraVAT_NewAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblFraVAT_NewAvgAggregateInputType>;
export const TblFraVAT_NewAvgAggregateInputObjectZodSchema = makeSchema();
