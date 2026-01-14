import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CurrID: SortOrderSchema.optional(),
  Name: SortOrderSchema.optional()
}).strict();
export const dictXRateExcelNamesMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictXRateExcelNamesMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRateExcelNamesMinOrderByAggregateInput>;
export const dictXRateExcelNamesMinOrderByAggregateInputObjectZodSchema = makeSchema();
