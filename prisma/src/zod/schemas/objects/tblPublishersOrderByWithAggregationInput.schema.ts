import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblPublishersCountOrderByAggregateInputObjectSchema as tblPublishersCountOrderByAggregateInputObjectSchema } from './tblPublishersCountOrderByAggregateInput.schema';
import { tblPublishersAvgOrderByAggregateInputObjectSchema as tblPublishersAvgOrderByAggregateInputObjectSchema } from './tblPublishersAvgOrderByAggregateInput.schema';
import { tblPublishersMaxOrderByAggregateInputObjectSchema as tblPublishersMaxOrderByAggregateInputObjectSchema } from './tblPublishersMaxOrderByAggregateInput.schema';
import { tblPublishersMinOrderByAggregateInputObjectSchema as tblPublishersMinOrderByAggregateInputObjectSchema } from './tblPublishersMinOrderByAggregateInput.schema';
import { tblPublishersSumOrderByAggregateInputObjectSchema as tblPublishersSumOrderByAggregateInputObjectSchema } from './tblPublishersSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  PubID: SortOrderSchema.optional(),
  PubName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PubAbb: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ParentPubID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblPublishersCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblPublishersAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblPublishersMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblPublishersMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblPublishersSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblPublishersOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblPublishersOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPublishersOrderByWithAggregationInput>;
export const tblPublishersOrderByWithAggregationInputObjectZodSchema = makeSchema();
