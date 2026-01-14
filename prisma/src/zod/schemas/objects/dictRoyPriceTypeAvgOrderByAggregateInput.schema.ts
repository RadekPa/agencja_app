import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  RoyPriceTypeID: SortOrderSchema.optional()
}).strict();
export const dictRoyPriceTypeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeAvgOrderByAggregateInput>;
export const dictRoyPriceTypeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
