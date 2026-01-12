import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CustomerCountOrderByAggregateInputObjectSchema as CustomerCountOrderByAggregateInputObjectSchema } from './CustomerCountOrderByAggregateInput.schema';
import { CustomerAvgOrderByAggregateInputObjectSchema as CustomerAvgOrderByAggregateInputObjectSchema } from './CustomerAvgOrderByAggregateInput.schema';
import { CustomerMaxOrderByAggregateInputObjectSchema as CustomerMaxOrderByAggregateInputObjectSchema } from './CustomerMaxOrderByAggregateInput.schema';
import { CustomerMinOrderByAggregateInputObjectSchema as CustomerMinOrderByAggregateInputObjectSchema } from './CustomerMinOrderByAggregateInput.schema';
import { CustomerSumOrderByAggregateInputObjectSchema as CustomerSumOrderByAggregateInputObjectSchema } from './CustomerSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  custAbb: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  city: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  postalCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  country: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  nip: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  regon: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => CustomerCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CustomerAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CustomerMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CustomerMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CustomerSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CustomerOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CustomerOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerOrderByWithAggregationInput>;
export const CustomerOrderByWithAggregationInputObjectZodSchema = makeSchema();
