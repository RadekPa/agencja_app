import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AdvTermId: SortOrderSchema.optional()
}).strict();
export const dictAdvTermSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictAdvTermSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTermSumOrderByAggregateInput>;
export const dictAdvTermSumOrderByAggregateInputObjectZodSchema = makeSchema();
