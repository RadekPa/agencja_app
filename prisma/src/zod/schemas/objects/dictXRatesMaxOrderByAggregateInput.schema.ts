import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CurrDate: SortOrderSchema.optional(),
  CurrID: SortOrderSchema.optional(),
  XRate: SortOrderSchema.optional()
}).strict();
export const dictXRatesMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictXRatesMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRatesMaxOrderByAggregateInput>;
export const dictXRatesMaxOrderByAggregateInputObjectZodSchema = makeSchema();
