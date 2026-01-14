import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictStatesCountOrderByAggregateInputObjectSchema as dictStatesCountOrderByAggregateInputObjectSchema } from './dictStatesCountOrderByAggregateInput.schema';
import { dictStatesAvgOrderByAggregateInputObjectSchema as dictStatesAvgOrderByAggregateInputObjectSchema } from './dictStatesAvgOrderByAggregateInput.schema';
import { dictStatesMaxOrderByAggregateInputObjectSchema as dictStatesMaxOrderByAggregateInputObjectSchema } from './dictStatesMaxOrderByAggregateInput.schema';
import { dictStatesMinOrderByAggregateInputObjectSchema as dictStatesMinOrderByAggregateInputObjectSchema } from './dictStatesMinOrderByAggregateInput.schema';
import { dictStatesSumOrderByAggregateInputObjectSchema as dictStatesSumOrderByAggregateInputObjectSchema } from './dictStatesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  StateID: SortOrderSchema.optional(),
  CountryID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  StateAbb: SortOrderSchema.optional(),
  StateName: SortOrderSchema.optional(),
  _count: z.lazy(() => dictStatesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictStatesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictStatesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictStatesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictStatesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictStatesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictStatesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesOrderByWithAggregationInput>;
export const dictStatesOrderByWithAggregationInputObjectZodSchema = makeSchema();
