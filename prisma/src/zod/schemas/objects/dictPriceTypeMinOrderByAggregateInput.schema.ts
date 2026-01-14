import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PriceTypeID: SortOrderSchema.optional(),
  PriceTypeDesc: SortOrderSchema.optional(),
  PriceTypePL: SortOrderSchema.optional()
}).strict();
export const dictPriceTypeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictPriceTypeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeMinOrderByAggregateInput>;
export const dictPriceTypeMinOrderByAggregateInputObjectZodSchema = makeSchema();
