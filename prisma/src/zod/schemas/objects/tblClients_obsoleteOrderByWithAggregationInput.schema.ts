import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblClients_obsoleteCountOrderByAggregateInputObjectSchema as tblClients_obsoleteCountOrderByAggregateInputObjectSchema } from './tblClients_obsoleteCountOrderByAggregateInput.schema';
import { tblClients_obsoleteAvgOrderByAggregateInputObjectSchema as tblClients_obsoleteAvgOrderByAggregateInputObjectSchema } from './tblClients_obsoleteAvgOrderByAggregateInput.schema';
import { tblClients_obsoleteMaxOrderByAggregateInputObjectSchema as tblClients_obsoleteMaxOrderByAggregateInputObjectSchema } from './tblClients_obsoleteMaxOrderByAggregateInput.schema';
import { tblClients_obsoleteMinOrderByAggregateInputObjectSchema as tblClients_obsoleteMinOrderByAggregateInputObjectSchema } from './tblClients_obsoleteMinOrderByAggregateInput.schema';
import { tblClients_obsoleteSumOrderByAggregateInputObjectSchema as tblClients_obsoleteSumOrderByAggregateInputObjectSchema } from './tblClients_obsoleteSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  RepModeID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GraalID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Commission: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DefAgrDoc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Jurisdiction: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblClients_obsoleteCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblClients_obsoleteAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblClients_obsoleteMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblClients_obsoleteMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblClients_obsoleteSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblClients_obsoleteOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteOrderByWithAggregationInput>;
export const tblClients_obsoleteOrderByWithAggregationInputObjectZodSchema = makeSchema();
