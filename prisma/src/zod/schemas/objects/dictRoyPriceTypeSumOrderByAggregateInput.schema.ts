import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  RoyPriceTypeID: SortOrderSchema.optional()
}).strict();
export const dictRoyPriceTypeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeSumOrderByAggregateInput>;
export const dictRoyPriceTypeSumOrderByAggregateInputObjectZodSchema = makeSchema();
