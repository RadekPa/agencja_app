import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  FVNr: SortOrderSchema.optional(),
  FVDate: SortOrderSchema.optional(),
  FVDateIssued: SortOrderSchema.optional(),
  FVType: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional(),
  OrigCurrency: SortOrderSchema.optional(),
  FVCurrency: SortOrderSchema.optional(),
  GraalPerc: SortOrderSchema.optional(),
  VATCode: SortOrderSchema.optional(),
  VatPerc: SortOrderSchema.optional(),
  NetAmt: SortOrderSchema.optional(),
  NetAmtCurr: SortOrderSchema.optional(),
  VatAmt: SortOrderSchema.optional(),
  XRate: SortOrderSchema.optional(),
  VatAmtCurr: SortOrderSchema.optional(),
  GrossAmt: SortOrderSchema.optional(),
  InvNr: SortOrderSchema.optional(),
  InvAmt: SortOrderSchema.optional(),
  Title: SortOrderSchema.optional(),
  ISBNNr: SortOrderSchema.optional(),
  PayType: SortOrderSchema.optional(),
  InvType: SortOrderSchema.optional(),
  FVDescription: SortOrderSchema.optional(),
  BilNr: SortOrderSchema.optional(),
  OrigFVNr: SortOrderSchema.optional(),
  CorrectFVNr: SortOrderSchema.optional(),
  CreditID: SortOrderSchema.optional(),
  ApplyID: SortOrderSchema.optional(),
  PayDate: SortOrderSchema.optional(),
  EnterDate: SortOrderSchema.optional(),
  EnterEmployee: SortOrderSchema.optional(),
  Status: SortOrderSchema.optional()
}).strict();
export const tblFraVAT_NewMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblFraVAT_NewMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblFraVAT_NewMinOrderByAggregateInput>;
export const tblFraVAT_NewMinOrderByAggregateInputObjectZodSchema = makeSchema();
