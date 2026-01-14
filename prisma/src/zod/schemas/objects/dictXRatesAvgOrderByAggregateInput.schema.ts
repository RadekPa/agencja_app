import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  XRate: SortOrderSchema.optional()
}).strict();
export const dictXRatesAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictXRatesAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRatesAvgOrderByAggregateInput>;
export const dictXRatesAvgOrderByAggregateInputObjectZodSchema = makeSchema();
