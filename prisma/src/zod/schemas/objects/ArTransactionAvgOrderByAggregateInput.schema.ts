import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TransactionID: SortOrderSchema.optional(),
  InvNr: SortOrderSchema.optional(),
  TransactionType: SortOrderSchema.optional(),
  TransactionAmt: SortOrderSchema.optional(),
  RCustID: SortOrderSchema.optional(),
  PCustID: SortOrderSchema.optional(),
  RBalance: SortOrderSchema.optional(),
  PBalance: SortOrderSchema.optional(),
  IFTBalance: SortOrderSchema.optional(),
  GraalBalance: SortOrderSchema.optional(),
  ReversalTransID: SortOrderSchema.optional(),
  OriginTransID: SortOrderSchema.optional(),
  ErrorID: SortOrderSchema.optional(),
  CreditID: SortOrderSchema.optional(),
  ApplyID: SortOrderSchema.optional(),
  TaxValue: SortOrderSchema.optional()
}).strict();
export const ArTransactionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArTransactionAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionAvgOrderByAggregateInput>;
export const ArTransactionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
