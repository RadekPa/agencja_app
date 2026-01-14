import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblTitEventsCountOrderByAggregateInputObjectSchema as tblTitEventsCountOrderByAggregateInputObjectSchema } from './tblTitEventsCountOrderByAggregateInput.schema';
import { tblTitEventsAvgOrderByAggregateInputObjectSchema as tblTitEventsAvgOrderByAggregateInputObjectSchema } from './tblTitEventsAvgOrderByAggregateInput.schema';
import { tblTitEventsMaxOrderByAggregateInputObjectSchema as tblTitEventsMaxOrderByAggregateInputObjectSchema } from './tblTitEventsMaxOrderByAggregateInput.schema';
import { tblTitEventsMinOrderByAggregateInputObjectSchema as tblTitEventsMinOrderByAggregateInputObjectSchema } from './tblTitEventsMinOrderByAggregateInput.schema';
import { tblTitEventsSumOrderByAggregateInputObjectSchema as tblTitEventsSumOrderByAggregateInputObjectSchema } from './tblTitEventsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  TitEventID: SortOrderSchema.optional(),
  CopyTypeID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EventCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TitleID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EventDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  NoOfCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EndDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblTitEventsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblTitEventsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblTitEventsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblTitEventsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblTitEventsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblTitEventsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblTitEventsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsOrderByWithAggregationInput>;
export const tblTitEventsOrderByWithAggregationInputObjectZodSchema = makeSchema();
