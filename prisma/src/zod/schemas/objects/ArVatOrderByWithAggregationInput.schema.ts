import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ArVatCountOrderByAggregateInputObjectSchema as ArVatCountOrderByAggregateInputObjectSchema } from './ArVatCountOrderByAggregateInput.schema';
import { ArVatAvgOrderByAggregateInputObjectSchema as ArVatAvgOrderByAggregateInputObjectSchema } from './ArVatAvgOrderByAggregateInput.schema';
import { ArVatMaxOrderByAggregateInputObjectSchema as ArVatMaxOrderByAggregateInputObjectSchema } from './ArVatMaxOrderByAggregateInput.schema';
import { ArVatMinOrderByAggregateInputObjectSchema as ArVatMinOrderByAggregateInputObjectSchema } from './ArVatMinOrderByAggregateInput.schema';
import { ArVatSumOrderByAggregateInputObjectSchema as ArVatSumOrderByAggregateInputObjectSchema } from './ArVatSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  VatCode: SortOrderSchema.optional(),
  Description: SortOrderSchema.optional(),
  VatRate: SortOrderSchema.optional(),
  DescriptionPL: SortOrderSchema.optional(),
  _count: z.lazy(() => ArVatCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ArVatAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ArVatMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ArVatMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ArVatSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ArVatOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ArVatOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ArVatOrderByWithAggregationInput>;
export const ArVatOrderByWithAggregationInputObjectZodSchema = makeSchema();
