import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { dictXRateExcelNamesCountOrderByAggregateInputObjectSchema as dictXRateExcelNamesCountOrderByAggregateInputObjectSchema } from './dictXRateExcelNamesCountOrderByAggregateInput.schema';
import { dictXRateExcelNamesMaxOrderByAggregateInputObjectSchema as dictXRateExcelNamesMaxOrderByAggregateInputObjectSchema } from './dictXRateExcelNamesMaxOrderByAggregateInput.schema';
import { dictXRateExcelNamesMinOrderByAggregateInputObjectSchema as dictXRateExcelNamesMinOrderByAggregateInputObjectSchema } from './dictXRateExcelNamesMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  CurrID: SortOrderSchema.optional(),
  Name: SortOrderSchema.optional(),
  _count: z.lazy(() => dictXRateExcelNamesCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictXRateExcelNamesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictXRateExcelNamesMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictXRateExcelNamesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictXRateExcelNamesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRateExcelNamesOrderByWithAggregationInput>;
export const dictXRateExcelNamesOrderByWithAggregationInputObjectZodSchema = makeSchema();
