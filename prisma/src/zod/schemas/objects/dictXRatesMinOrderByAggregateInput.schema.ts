import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CurrDate: SortOrderSchema.optional(),
  CurrID: SortOrderSchema.optional(),
  XRate: SortOrderSchema.optional()
}).strict();
export const dictXRatesMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictXRatesMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRatesMinOrderByAggregateInput>;
export const dictXRatesMinOrderByAggregateInputObjectZodSchema = makeSchema();
