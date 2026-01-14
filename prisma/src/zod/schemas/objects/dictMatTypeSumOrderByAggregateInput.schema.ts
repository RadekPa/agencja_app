import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  MatTypeID: SortOrderSchema.optional()
}).strict();
export const dictMatTypeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictMatTypeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictMatTypeSumOrderByAggregateInput>;
export const dictMatTypeSumOrderByAggregateInputObjectZodSchema = makeSchema();
