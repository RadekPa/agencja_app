import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArTransferDetailCountOrderByAggregateInputObjectSchema as ArTransferDetailCountOrderByAggregateInputObjectSchema } from './ArTransferDetailCountOrderByAggregateInput.schema';
import { ArTransferDetailAvgOrderByAggregateInputObjectSchema as ArTransferDetailAvgOrderByAggregateInputObjectSchema } from './ArTransferDetailAvgOrderByAggregateInput.schema';
import { ArTransferDetailMaxOrderByAggregateInputObjectSchema as ArTransferDetailMaxOrderByAggregateInputObjectSchema } from './ArTransferDetailMaxOrderByAggregateInput.schema';
import { ArTransferDetailMinOrderByAggregateInputObjectSchema as ArTransferDetailMinOrderByAggregateInputObjectSchema } from './ArTransferDetailMinOrderByAggregateInput.schema';
import { ArTransferDetailSumOrderByAggregateInputObjectSchema as ArTransferDetailSumOrderByAggregateInputObjectSchema } from './ArTransferDetailSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  TransferID: SortOrderSchema.optional(),
  DebitID: SortOrderSchema.optional(),
  AmtWired: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ArTransferDetailCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ArTransferDetailAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ArTransferDetailMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ArTransferDetailMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ArTransferDetailSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ArTransferDetailOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ArTransferDetailOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailOrderByWithAggregationInput>;
export const ArTransferDetailOrderByWithAggregationInputObjectZodSchema = makeSchema();
