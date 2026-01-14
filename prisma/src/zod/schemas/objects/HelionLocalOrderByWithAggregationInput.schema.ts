import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { HelionLocalCountOrderByAggregateInputObjectSchema as HelionLocalCountOrderByAggregateInputObjectSchema } from './HelionLocalCountOrderByAggregateInput.schema';
import { HelionLocalMaxOrderByAggregateInputObjectSchema as HelionLocalMaxOrderByAggregateInputObjectSchema } from './HelionLocalMaxOrderByAggregateInput.schema';
import { HelionLocalMinOrderByAggregateInputObjectSchema as HelionLocalMinOrderByAggregateInputObjectSchema } from './HelionLocalMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  ISBNORG: SortOrderSchema.optional(),
  ISBNHELION: SortOrderSchema.optional(),
  TYTULORG: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TYTULHELION: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => HelionLocalCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => HelionLocalMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => HelionLocalMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const HelionLocalOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.HelionLocalOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.HelionLocalOrderByWithAggregationInput>;
export const HelionLocalOrderByWithAggregationInputObjectZodSchema = makeSchema();
