import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblSubmEventsCountOrderByAggregateInputObjectSchema as tblSubmEventsCountOrderByAggregateInputObjectSchema } from './tblSubmEventsCountOrderByAggregateInput.schema';
import { tblSubmEventsAvgOrderByAggregateInputObjectSchema as tblSubmEventsAvgOrderByAggregateInputObjectSchema } from './tblSubmEventsAvgOrderByAggregateInput.schema';
import { tblSubmEventsMaxOrderByAggregateInputObjectSchema as tblSubmEventsMaxOrderByAggregateInputObjectSchema } from './tblSubmEventsMaxOrderByAggregateInput.schema';
import { tblSubmEventsMinOrderByAggregateInputObjectSchema as tblSubmEventsMinOrderByAggregateInputObjectSchema } from './tblSubmEventsMinOrderByAggregateInput.schema';
import { tblSubmEventsSumOrderByAggregateInputObjectSchema as tblSubmEventsSumOrderByAggregateInputObjectSchema } from './tblSubmEventsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  SubmEventID: SortOrderSchema.optional(),
  SubmID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EventCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EventDate: SortOrderSchema.optional(),
  NoOfCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EndDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblSubmEventsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblSubmEventsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblSubmEventsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblSubmEventsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblSubmEventsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblSubmEventsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblSubmEventsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsOrderByWithAggregationInput>;
export const tblSubmEventsOrderByWithAggregationInputObjectZodSchema = makeSchema();
