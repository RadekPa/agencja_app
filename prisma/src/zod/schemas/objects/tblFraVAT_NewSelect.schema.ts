import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  FVNr: z.boolean().optional(),
  FVDate: z.boolean().optional(),
  FVDateIssued: z.boolean().optional(),
  FVType: z.boolean().optional(),
  CustID: z.boolean().optional(),
  OrigCurrency: z.boolean().optional(),
  FVCurrency: z.boolean().optional(),
  GraalPerc: z.boolean().optional(),
  VATCode: z.boolean().optional(),
  VatPerc: z.boolean().optional(),
  NetAmt: z.boolean().optional(),
  NetAmtCurr: z.boolean().optional(),
  VatAmt: z.boolean().optional(),
  XRate: z.boolean().optional(),
  VatAmtCurr: z.boolean().optional(),
  GrossAmt: z.boolean().optional(),
  InvNr: z.boolean().optional(),
  InvAmt: z.boolean().optional(),
  Title: z.boolean().optional(),
  ISBNNr: z.boolean().optional(),
  PayType: z.boolean().optional(),
  InvType: z.boolean().optional(),
  FVDescription: z.boolean().optional(),
  BilNr: z.boolean().optional(),
  OrigFVNr: z.boolean().optional(),
  CorrectFVNr: z.boolean().optional(),
  CreditID: z.boolean().optional(),
  ApplyID: z.boolean().optional(),
  PayDate: z.boolean().optional(),
  EnterDate: z.boolean().optional(),
  EnterEmployee: z.boolean().optional(),
  Status: z.boolean().optional()
}).strict();
export const tblFraVAT_NewSelectObjectSchema: z.ZodType<Prisma.tblFraVAT_NewSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblFraVAT_NewSelect>;
export const tblFraVAT_NewSelectObjectZodSchema = makeSchema();
