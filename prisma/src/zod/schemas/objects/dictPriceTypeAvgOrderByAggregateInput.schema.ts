import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PriceTypeID: SortOrderSchema.optional()
}).strict();
export const dictPriceTypeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictPriceTypeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeAvgOrderByAggregateInput>;
export const dictPriceTypeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
