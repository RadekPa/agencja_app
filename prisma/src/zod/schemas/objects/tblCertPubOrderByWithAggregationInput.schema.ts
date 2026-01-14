import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblCertPubCountOrderByAggregateInputObjectSchema as tblCertPubCountOrderByAggregateInputObjectSchema } from './tblCertPubCountOrderByAggregateInput.schema';
import { tblCertPubAvgOrderByAggregateInputObjectSchema as tblCertPubAvgOrderByAggregateInputObjectSchema } from './tblCertPubAvgOrderByAggregateInput.schema';
import { tblCertPubMaxOrderByAggregateInputObjectSchema as tblCertPubMaxOrderByAggregateInputObjectSchema } from './tblCertPubMaxOrderByAggregateInput.schema';
import { tblCertPubMinOrderByAggregateInputObjectSchema as tblCertPubMinOrderByAggregateInputObjectSchema } from './tblCertPubMinOrderByAggregateInput.schema';
import { tblCertPubSumOrderByAggregateInputObjectSchema as tblCertPubSumOrderByAggregateInputObjectSchema } from './tblCertPubSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  ClientID: SortOrderSchema.optional(),
  Year: SortOrderSchema.optional(),
  PubID: SortOrderSchema.optional(),
  DateSent: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Original: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblCertPubCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblCertPubAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblCertPubMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblCertPubMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblCertPubSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblCertPubOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblCertPubOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCertPubOrderByWithAggregationInput>;
export const tblCertPubOrderByWithAggregationInputObjectZodSchema = makeSchema();
