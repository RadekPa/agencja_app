import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArTransactionDetailCountOrderByAggregateInputObjectSchema as ArTransactionDetailCountOrderByAggregateInputObjectSchema } from './ArTransactionDetailCountOrderByAggregateInput.schema';
import { ArTransactionDetailAvgOrderByAggregateInputObjectSchema as ArTransactionDetailAvgOrderByAggregateInputObjectSchema } from './ArTransactionDetailAvgOrderByAggregateInput.schema';
import { ArTransactionDetailMaxOrderByAggregateInputObjectSchema as ArTransactionDetailMaxOrderByAggregateInputObjectSchema } from './ArTransactionDetailMaxOrderByAggregateInput.schema';
import { ArTransactionDetailMinOrderByAggregateInputObjectSchema as ArTransactionDetailMinOrderByAggregateInputObjectSchema } from './ArTransactionDetailMinOrderByAggregateInput.schema';
import { ArTransactionDetailSumOrderByAggregateInputObjectSchema as ArTransactionDetailSumOrderByAggregateInputObjectSchema } from './ArTransactionDetailSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  ItemID: SortOrderSchema.optional(),
  TransactionID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AccountID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Amount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ArTransactionDetailCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ArTransactionDetailAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ArTransactionDetailMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ArTransactionDetailMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ArTransactionDetailSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ArTransactionDetailOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailOrderByWithAggregationInput>;
export const ArTransactionDetailOrderByWithAggregationInputObjectZodSchema = makeSchema();
