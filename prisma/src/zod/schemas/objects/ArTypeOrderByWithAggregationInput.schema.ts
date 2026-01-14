import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArTypeCountOrderByAggregateInputObjectSchema as ArTypeCountOrderByAggregateInputObjectSchema } from './ArTypeCountOrderByAggregateInput.schema';
import { ArTypeMaxOrderByAggregateInputObjectSchema as ArTypeMaxOrderByAggregateInputObjectSchema } from './ArTypeMaxOrderByAggregateInput.schema';
import { ArTypeMinOrderByAggregateInputObjectSchema as ArTypeMinOrderByAggregateInputObjectSchema } from './ArTypeMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  ArType: SortOrderSchema.optional(),
  ArTypeDescription: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ArTypeDescriptionPL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ArTypeCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ArTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ArTypeMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ArTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ArTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTypeOrderByWithAggregationInput>;
export const ArTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
