import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { dictRepModesCountOrderByAggregateInputObjectSchema as dictRepModesCountOrderByAggregateInputObjectSchema } from './dictRepModesCountOrderByAggregateInput.schema';
import { dictRepModesAvgOrderByAggregateInputObjectSchema as dictRepModesAvgOrderByAggregateInputObjectSchema } from './dictRepModesAvgOrderByAggregateInput.schema';
import { dictRepModesMaxOrderByAggregateInputObjectSchema as dictRepModesMaxOrderByAggregateInputObjectSchema } from './dictRepModesMaxOrderByAggregateInput.schema';
import { dictRepModesMinOrderByAggregateInputObjectSchema as dictRepModesMinOrderByAggregateInputObjectSchema } from './dictRepModesMinOrderByAggregateInput.schema';
import { dictRepModesSumOrderByAggregateInputObjectSchema as dictRepModesSumOrderByAggregateInputObjectSchema } from './dictRepModesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  RepModeID: SortOrderSchema.optional(),
  RepModeDesc: SortOrderSchema.optional(),
  _count: z.lazy(() => dictRepModesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictRepModesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictRepModesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictRepModesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictRepModesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictRepModesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictRepModesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesOrderByWithAggregationInput>;
export const dictRepModesOrderByWithAggregationInputObjectZodSchema = makeSchema();
