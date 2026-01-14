import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblRoyRatesCountOrderByAggregateInputObjectSchema as tblRoyRatesCountOrderByAggregateInputObjectSchema } from './tblRoyRatesCountOrderByAggregateInput.schema';
import { tblRoyRatesAvgOrderByAggregateInputObjectSchema as tblRoyRatesAvgOrderByAggregateInputObjectSchema } from './tblRoyRatesAvgOrderByAggregateInput.schema';
import { tblRoyRatesMaxOrderByAggregateInputObjectSchema as tblRoyRatesMaxOrderByAggregateInputObjectSchema } from './tblRoyRatesMaxOrderByAggregateInput.schema';
import { tblRoyRatesMinOrderByAggregateInputObjectSchema as tblRoyRatesMinOrderByAggregateInputObjectSchema } from './tblRoyRatesMinOrderByAggregateInput.schema';
import { tblRoyRatesSumOrderByAggregateInputObjectSchema as tblRoyRatesSumOrderByAggregateInputObjectSchema } from './tblRoyRatesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  Step: SortOrderSchema.optional(),
  AgrRightID: SortOrderSchema.optional(),
  AgrID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CpsMax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Rate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblRoyRatesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblRoyRatesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblRoyRatesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblRoyRatesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblRoyRatesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblRoyRatesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblRoyRatesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesOrderByWithAggregationInput>;
export const tblRoyRatesOrderByWithAggregationInputObjectZodSchema = makeSchema();
