import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  FVNr: SortOrderSchema.optional(),
  FVType: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional(),
  GraalPerc: SortOrderSchema.optional(),
  VatPerc: SortOrderSchema.optional(),
  NetAmt: SortOrderSchema.optional(),
  NetAmtCurr: SortOrderSchema.optional(),
  VatAmt: SortOrderSchema.optional(),
  XRate: SortOrderSchema.optional(),
  VatAmtCurr: SortOrderSchema.optional(),
  GrossAmt: SortOrderSchema.optional(),
  InvNr: SortOrderSchema.optional(),
  InvAmt: SortOrderSchema.optional(),
  BilNr: SortOrderSchema.optional(),
  OrigFVNr: SortOrderSchema.optional(),
  CorrectFVNr: SortOrderSchema.optional(),
  CreditID: SortOrderSchema.optional(),
  ApplyID: SortOrderSchema.optional()
}).strict();
export const tblFraVAT_NewAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblFraVAT_NewAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblFraVAT_NewAvgOrderByAggregateInput>;
export const tblFraVAT_NewAvgOrderByAggregateInputObjectZodSchema = makeSchema();
