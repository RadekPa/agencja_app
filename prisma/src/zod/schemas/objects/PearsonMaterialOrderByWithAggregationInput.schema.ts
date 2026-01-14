import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PearsonMaterialCountOrderByAggregateInputObjectSchema as PearsonMaterialCountOrderByAggregateInputObjectSchema } from './PearsonMaterialCountOrderByAggregateInput.schema';
import { PearsonMaterialAvgOrderByAggregateInputObjectSchema as PearsonMaterialAvgOrderByAggregateInputObjectSchema } from './PearsonMaterialAvgOrderByAggregateInput.schema';
import { PearsonMaterialMaxOrderByAggregateInputObjectSchema as PearsonMaterialMaxOrderByAggregateInputObjectSchema } from './PearsonMaterialMaxOrderByAggregateInput.schema';
import { PearsonMaterialMinOrderByAggregateInputObjectSchema as PearsonMaterialMinOrderByAggregateInputObjectSchema } from './PearsonMaterialMinOrderByAggregateInput.schema';
import { PearsonMaterialSumOrderByAggregateInputObjectSchema as PearsonMaterialSumOrderByAggregateInputObjectSchema } from './PearsonMaterialSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  MyNumber: SortOrderSchema.optional(),
  ContractID: SortOrderSchema.optional(),
  InvoiceNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  InvoiceDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Publisher: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Title: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ISBN: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Amount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => PearsonMaterialCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PearsonMaterialAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PearsonMaterialMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PearsonMaterialMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PearsonMaterialSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PearsonMaterialOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PearsonMaterialOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PearsonMaterialOrderByWithAggregationInput>;
export const PearsonMaterialOrderByWithAggregationInputObjectZodSchema = makeSchema();
