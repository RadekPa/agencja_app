import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  XRate: SortOrderSchema.optional()
}).strict();
export const dictXRatesSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictXRatesSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRatesSumOrderByAggregateInput>;
export const dictXRatesSumOrderByAggregateInputObjectZodSchema = makeSchema();
