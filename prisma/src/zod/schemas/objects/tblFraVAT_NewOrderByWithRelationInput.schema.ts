import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  FVNr: SortOrderSchema.optional(),
  FVDate: SortOrderSchema.optional(),
  FVDateIssued: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  FVType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CustID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  OrigCurrency: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  FVCurrency: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GraalPerc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  VATCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  VatPerc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  NetAmt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  NetAmtCurr: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  VatAmt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  XRate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  VatAmtCurr: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GrossAmt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  InvNr: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  InvAmt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Title: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ISBNNr: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PayType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  InvType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  FVDescription: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  BilNr: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  OrigFVNr: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CorrectFVNr: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CreditID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ApplyID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PayDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EnterDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EnterEmployee: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const tblFraVAT_NewOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblFraVAT_NewOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblFraVAT_NewOrderByWithRelationInput>;
export const tblFraVAT_NewOrderByWithRelationInputObjectZodSchema = makeSchema();
