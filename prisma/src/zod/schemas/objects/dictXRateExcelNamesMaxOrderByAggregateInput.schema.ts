import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CurrID: SortOrderSchema.optional(),
  Name: SortOrderSchema.optional()
}).strict();
export const dictXRateExcelNamesMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictXRateExcelNamesMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRateExcelNamesMaxOrderByAggregateInput>;
export const dictXRateExcelNamesMaxOrderByAggregateInputObjectZodSchema = makeSchema();
