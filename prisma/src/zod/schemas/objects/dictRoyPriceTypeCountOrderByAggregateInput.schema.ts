import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  RoyPriceTypeID: SortOrderSchema.optional(),
  RoyPriceTypeDesc: SortOrderSchema.optional(),
  RoyPriceTypePL: SortOrderSchema.optional()
}).strict();
export const dictRoyPriceTypeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeCountOrderByAggregateInput>;
export const dictRoyPriceTypeCountOrderByAggregateInputObjectZodSchema = makeSchema();
