import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  RoyTypeID: SortOrderSchema.optional(),
  AgrRightID: SortOrderSchema.optional()
}).strict();
export const dictRoyTypeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictRoyTypeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyTypeSumOrderByAggregateInput>;
export const dictRoyTypeSumOrderByAggregateInputObjectZodSchema = makeSchema();
