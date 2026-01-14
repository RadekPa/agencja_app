import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PriceTypeID: SortOrderSchema.optional()
}).strict();
export const dictPriceTypeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictPriceTypeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeSumOrderByAggregateInput>;
export const dictPriceTypeSumOrderByAggregateInputObjectZodSchema = makeSchema();
