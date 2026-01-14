import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAgrEventsCountOrderByAggregateInputObjectSchema as tblAgrEventsCountOrderByAggregateInputObjectSchema } from './tblAgrEventsCountOrderByAggregateInput.schema';
import { tblAgrEventsAvgOrderByAggregateInputObjectSchema as tblAgrEventsAvgOrderByAggregateInputObjectSchema } from './tblAgrEventsAvgOrderByAggregateInput.schema';
import { tblAgrEventsMaxOrderByAggregateInputObjectSchema as tblAgrEventsMaxOrderByAggregateInputObjectSchema } from './tblAgrEventsMaxOrderByAggregateInput.schema';
import { tblAgrEventsMinOrderByAggregateInputObjectSchema as tblAgrEventsMinOrderByAggregateInputObjectSchema } from './tblAgrEventsMinOrderByAggregateInput.schema';
import { tblAgrEventsSumOrderByAggregateInputObjectSchema as tblAgrEventsSumOrderByAggregateInputObjectSchema } from './tblAgrEventsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  AgrEventID: SortOrderSchema.optional(),
  AgrID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AgrEventCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EventDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  NoOfCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EndDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DateMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  UserMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblAgrEventsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblAgrEventsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblAgrEventsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblAgrEventsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblAgrEventsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblAgrEventsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblAgrEventsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsOrderByWithAggregationInput>;
export const tblAgrEventsOrderByWithAggregationInputObjectZodSchema = makeSchema();
