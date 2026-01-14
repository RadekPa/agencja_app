import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArTransactionCountOrderByAggregateInputObjectSchema as ArTransactionCountOrderByAggregateInputObjectSchema } from './ArTransactionCountOrderByAggregateInput.schema';
import { ArTransactionAvgOrderByAggregateInputObjectSchema as ArTransactionAvgOrderByAggregateInputObjectSchema } from './ArTransactionAvgOrderByAggregateInput.schema';
import { ArTransactionMaxOrderByAggregateInputObjectSchema as ArTransactionMaxOrderByAggregateInputObjectSchema } from './ArTransactionMaxOrderByAggregateInput.schema';
import { ArTransactionMinOrderByAggregateInputObjectSchema as ArTransactionMinOrderByAggregateInputObjectSchema } from './ArTransactionMinOrderByAggregateInput.schema';
import { ArTransactionSumOrderByAggregateInputObjectSchema as ArTransactionSumOrderByAggregateInputObjectSchema } from './ArTransactionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  TransactionID: SortOrderSchema.optional(),
  DefaultDocRef: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  InvNr: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TransactionDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TransactionType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Currency: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TransactionAmt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RCustID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PCustID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RBalance: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PBalance: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  IFTBalance: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GraalBalance: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ClientReference: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  OurBankTransRef: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  NetDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  IsChargeInterest: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ReversalTransID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  OriginTransID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EntryDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  OriginUserID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ErrorID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CreditID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ApplyID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TaxCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TaxValue: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ArTransactionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ArTransactionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ArTransactionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ArTransactionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ArTransactionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ArTransactionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ArTransactionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionOrderByWithAggregationInput>;
export const ArTransactionOrderByWithAggregationInputObjectZodSchema = makeSchema();
