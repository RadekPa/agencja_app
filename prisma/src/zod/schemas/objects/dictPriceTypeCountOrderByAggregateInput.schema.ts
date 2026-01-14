import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PriceTypeID: SortOrderSchema.optional(),
  PriceTypeDesc: SortOrderSchema.optional(),
  PriceTypePL: SortOrderSchema.optional()
}).strict();
export const dictPriceTypeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictPriceTypeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeCountOrderByAggregateInput>;
export const dictPriceTypeCountOrderByAggregateInputObjectZodSchema = makeSchema();
