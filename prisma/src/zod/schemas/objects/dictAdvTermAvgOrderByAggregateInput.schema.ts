import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AdvTermId: SortOrderSchema.optional()
}).strict();
export const dictAdvTermAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictAdvTermAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTermAvgOrderByAggregateInput>;
export const dictAdvTermAvgOrderByAggregateInputObjectZodSchema = makeSchema();
