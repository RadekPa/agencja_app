import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BookAuthorCountOrderByAggregateInputObjectSchema as BookAuthorCountOrderByAggregateInputObjectSchema } from './BookAuthorCountOrderByAggregateInput.schema';
import { BookAuthorAvgOrderByAggregateInputObjectSchema as BookAuthorAvgOrderByAggregateInputObjectSchema } from './BookAuthorAvgOrderByAggregateInput.schema';
import { BookAuthorMaxOrderByAggregateInputObjectSchema as BookAuthorMaxOrderByAggregateInputObjectSchema } from './BookAuthorMaxOrderByAggregateInput.schema';
import { BookAuthorMinOrderByAggregateInputObjectSchema as BookAuthorMinOrderByAggregateInputObjectSchema } from './BookAuthorMinOrderByAggregateInput.schema';
import { BookAuthorSumOrderByAggregateInputObjectSchema as BookAuthorSumOrderByAggregateInputObjectSchema } from './BookAuthorSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  middleName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lastName: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  workEmail: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  personalEmail: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  photos: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  clientId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => BookAuthorCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => BookAuthorAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BookAuthorMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BookAuthorMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => BookAuthorSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BookAuthorOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BookAuthorOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BookAuthorOrderByWithAggregationInput>;
export const BookAuthorOrderByWithAggregationInputObjectZodSchema = makeSchema();
