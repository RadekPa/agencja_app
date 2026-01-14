import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { sysdiagramsCountOrderByAggregateInputObjectSchema as sysdiagramsCountOrderByAggregateInputObjectSchema } from './sysdiagramsCountOrderByAggregateInput.schema';
import { sysdiagramsAvgOrderByAggregateInputObjectSchema as sysdiagramsAvgOrderByAggregateInputObjectSchema } from './sysdiagramsAvgOrderByAggregateInput.schema';
import { sysdiagramsMaxOrderByAggregateInputObjectSchema as sysdiagramsMaxOrderByAggregateInputObjectSchema } from './sysdiagramsMaxOrderByAggregateInput.schema';
import { sysdiagramsMinOrderByAggregateInputObjectSchema as sysdiagramsMinOrderByAggregateInputObjectSchema } from './sysdiagramsMinOrderByAggregateInput.schema';
import { sysdiagramsSumOrderByAggregateInputObjectSchema as sysdiagramsSumOrderByAggregateInputObjectSchema } from './sysdiagramsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  name: SortOrderSchema.optional(),
  principal_id: SortOrderSchema.optional(),
  diagram_id: SortOrderSchema.optional(),
  version: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  definition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => sysdiagramsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => sysdiagramsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => sysdiagramsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => sysdiagramsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => sysdiagramsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const sysdiagramsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.sysdiagramsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.sysdiagramsOrderByWithAggregationInput>;
export const sysdiagramsOrderByWithAggregationInputObjectZodSchema = makeSchema();
