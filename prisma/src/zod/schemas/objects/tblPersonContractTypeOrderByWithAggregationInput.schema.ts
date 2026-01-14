import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblPersonContractTypeCountOrderByAggregateInputObjectSchema as tblPersonContractTypeCountOrderByAggregateInputObjectSchema } from './tblPersonContractTypeCountOrderByAggregateInput.schema';
import { tblPersonContractTypeAvgOrderByAggregateInputObjectSchema as tblPersonContractTypeAvgOrderByAggregateInputObjectSchema } from './tblPersonContractTypeAvgOrderByAggregateInput.schema';
import { tblPersonContractTypeMaxOrderByAggregateInputObjectSchema as tblPersonContractTypeMaxOrderByAggregateInputObjectSchema } from './tblPersonContractTypeMaxOrderByAggregateInput.schema';
import { tblPersonContractTypeMinOrderByAggregateInputObjectSchema as tblPersonContractTypeMinOrderByAggregateInputObjectSchema } from './tblPersonContractTypeMinOrderByAggregateInput.schema';
import { tblPersonContractTypeSumOrderByAggregateInputObjectSchema as tblPersonContractTypeSumOrderByAggregateInputObjectSchema } from './tblPersonContractTypeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  CTypeID: SortOrderSchema.optional(),
  CTypeDescr: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblPersonContractTypeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblPersonContractTypeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblPersonContractTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblPersonContractTypeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblPersonContractTypeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblPersonContractTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblPersonContractTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonContractTypeOrderByWithAggregationInput>;
export const tblPersonContractTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
