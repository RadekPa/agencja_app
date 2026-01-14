import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  FVNr: z.number().int(),
  FVDate: z.coerce.date(),
  FVDateIssued: z.coerce.date().optional().nullable(),
  FVType: z.number().int().optional().nullable(),
  CustID: z.number().int().optional().nullable(),
  OrigCurrency: z.string().max(3).optional().nullable(),
  FVCurrency: z.string().max(3).optional().nullable(),
  GraalPerc: z.number().optional().nullable(),
  VATCode: z.string().max(10).optional().nullable(),
  VatPerc: z.number().optional().nullable(),
  NetAmt: z.number().optional().nullable(),
  NetAmtCurr: z.number().optional().nullable(),
  VatAmt: z.number().optional().nullable(),
  XRate: z.number().optional().nullable(),
  VatAmtCurr: z.number().optional().nullable(),
  GrossAmt: z.number().optional().nullable(),
  InvNr: z.number().int().optional().nullable(),
  InvAmt: z.number().optional().nullable(),
  Title: z.string().max(200).optional().nullable(),
  ISBNNr: z.string().max(50).optional().nullable(),
  PayType: z.string().max(255).optional().nullable(),
  InvType: z.string().max(1).optional().nullable(),
  FVDescription: z.string().max(100).optional().nullable(),
  BilNr: z.number().int().optional().nullable(),
  OrigFVNr: z.number().int().optional().nullable(),
  CorrectFVNr: z.number().int().optional().nullable(),
  CreditID: z.number().int().optional().nullable(),
  ApplyID: z.number().int().optional().nullable(),
  PayDate: z.coerce.date().optional().nullable(),
  EnterDate: z.coerce.date().optional().nullable(),
  EnterEmployee: z.string().max(100).optional().nullable(),
  Status: z.string().max(10).optional().nullable()
}).strict();
export const tblFraVAT_NewCreateManyInputObjectSchema: z.ZodType<Prisma.tblFraVAT_NewCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblFraVAT_NewCreateManyInput>;
export const tblFraVAT_NewCreateManyInputObjectZodSchema = makeSchema();
