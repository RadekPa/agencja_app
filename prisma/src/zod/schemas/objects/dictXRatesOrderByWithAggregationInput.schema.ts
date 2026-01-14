import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { dictXRatesCountOrderByAggregateInputObjectSchema as dictXRatesCountOrderByAggregateInputObjectSchema } from './dictXRatesCountOrderByAggregateInput.schema';
import { dictXRatesAvgOrderByAggregateInputObjectSchema as dictXRatesAvgOrderByAggregateInputObjectSchema } from './dictXRatesAvgOrderByAggregateInput.schema';
import { dictXRatesMaxOrderByAggregateInputObjectSchema as dictXRatesMaxOrderByAggregateInputObjectSchema } from './dictXRatesMaxOrderByAggregateInput.schema';
import { dictXRatesMinOrderByAggregateInputObjectSchema as dictXRatesMinOrderByAggregateInputObjectSchema } from './dictXRatesMinOrderByAggregateInput.schema';
import { dictXRatesSumOrderByAggregateInputObjectSchema as dictXRatesSumOrderByAggregateInputObjectSchema } from './dictXRatesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  CurrDate: SortOrderSchema.optional(),
  CurrID: SortOrderSchema.optional(),
  XRate: SortOrderSchema.optional(),
  _count: z.lazy(() => dictXRatesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictXRatesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictXRatesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictXRatesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictXRatesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictXRatesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictXRatesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRatesOrderByWithAggregationInput>;
export const dictXRatesOrderByWithAggregationInputObjectZodSchema = makeSchema();
