import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblFraVAT_NewCountOrderByAggregateInputObjectSchema as tblFraVAT_NewCountOrderByAggregateInputObjectSchema } from './tblFraVAT_NewCountOrderByAggregateInput.schema';
import { tblFraVAT_NewAvgOrderByAggregateInputObjectSchema as tblFraVAT_NewAvgOrderByAggregateInputObjectSchema } from './tblFraVAT_NewAvgOrderByAggregateInput.schema';
import { tblFraVAT_NewMaxOrderByAggregateInputObjectSchema as tblFraVAT_NewMaxOrderByAggregateInputObjectSchema } from './tblFraVAT_NewMaxOrderByAggregateInput.schema';
import { tblFraVAT_NewMinOrderByAggregateInputObjectSchema as tblFraVAT_NewMinOrderByAggregateInputObjectSchema } from './tblFraVAT_NewMinOrderByAggregateInput.schema';
import { tblFraVAT_NewSumOrderByAggregateInputObjectSchema as tblFraVAT_NewSumOrderByAggregateInputObjectSchema } from './tblFraVAT_NewSumOrderByAggregateInput.schema'

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
  Status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblFraVAT_NewCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblFraVAT_NewAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblFraVAT_NewMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblFraVAT_NewMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblFraVAT_NewSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblFraVAT_NewOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblFraVAT_NewOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblFraVAT_NewOrderByWithAggregationInput>;
export const tblFraVAT_NewOrderByWithAggregationInputObjectZodSchema = makeSchema();
