import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  RoyPriceTypeID: SortOrderSchema.optional(),
  RoyPriceTypeDesc: SortOrderSchema.optional(),
  RoyPriceTypePL: SortOrderSchema.optional()
}).strict();
export const dictRoyPriceTypeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeMaxOrderByAggregateInput>;
export const dictRoyPriceTypeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
