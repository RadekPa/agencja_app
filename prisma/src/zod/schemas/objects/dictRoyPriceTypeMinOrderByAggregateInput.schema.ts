import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  RoyPriceTypeID: SortOrderSchema.optional(),
  RoyPriceTypeDesc: SortOrderSchema.optional(),
  RoyPriceTypePL: SortOrderSchema.optional()
}).strict();
export const dictRoyPriceTypeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeMinOrderByAggregateInput>;
export const dictRoyPriceTypeMinOrderByAggregateInputObjectZodSchema = makeSchema();
