import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblSeriesCountOrderByAggregateInputObjectSchema as tblSeriesCountOrderByAggregateInputObjectSchema } from './tblSeriesCountOrderByAggregateInput.schema';
import { tblSeriesAvgOrderByAggregateInputObjectSchema as tblSeriesAvgOrderByAggregateInputObjectSchema } from './tblSeriesAvgOrderByAggregateInput.schema';
import { tblSeriesMaxOrderByAggregateInputObjectSchema as tblSeriesMaxOrderByAggregateInputObjectSchema } from './tblSeriesMaxOrderByAggregateInput.schema';
import { tblSeriesMinOrderByAggregateInputObjectSchema as tblSeriesMinOrderByAggregateInputObjectSchema } from './tblSeriesMinOrderByAggregateInput.schema';
import { tblSeriesSumOrderByAggregateInputObjectSchema as tblSeriesSumOrderByAggregateInputObjectSchema } from './tblSeriesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  SeriesID: SortOrderSchema.optional(),
  CustID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  SeriesFullName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  SeriesShortName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblSeriesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblSeriesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblSeriesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblSeriesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblSeriesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblSeriesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblSeriesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesOrderByWithAggregationInput>;
export const tblSeriesOrderByWithAggregationInputObjectZodSchema = makeSchema();
