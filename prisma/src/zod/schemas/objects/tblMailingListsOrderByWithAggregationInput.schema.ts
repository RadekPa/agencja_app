import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblMailingListsCountOrderByAggregateInputObjectSchema as tblMailingListsCountOrderByAggregateInputObjectSchema } from './tblMailingListsCountOrderByAggregateInput.schema';
import { tblMailingListsAvgOrderByAggregateInputObjectSchema as tblMailingListsAvgOrderByAggregateInputObjectSchema } from './tblMailingListsAvgOrderByAggregateInput.schema';
import { tblMailingListsMaxOrderByAggregateInputObjectSchema as tblMailingListsMaxOrderByAggregateInputObjectSchema } from './tblMailingListsMaxOrderByAggregateInput.schema';
import { tblMailingListsMinOrderByAggregateInputObjectSchema as tblMailingListsMinOrderByAggregateInputObjectSchema } from './tblMailingListsMinOrderByAggregateInput.schema';
import { tblMailingListsSumOrderByAggregateInputObjectSchema as tblMailingListsSumOrderByAggregateInputObjectSchema } from './tblMailingListsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  ClassCode: SortOrderSchema.optional(),
  SubClassCode: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional(),
  _count: z.lazy(() => tblMailingListsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblMailingListsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblMailingListsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblMailingListsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblMailingListsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblMailingListsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblMailingListsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsOrderByWithAggregationInput>;
export const tblMailingListsOrderByWithAggregationInputObjectZodSchema = makeSchema();
