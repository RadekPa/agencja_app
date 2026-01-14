import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PriceTypeID: SortOrderSchema.optional(),
  PriceTypeDesc: SortOrderSchema.optional(),
  PriceTypePL: SortOrderSchema.optional()
}).strict();
export const dictPriceTypeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictPriceTypeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeMaxOrderByAggregateInput>;
export const dictPriceTypeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
