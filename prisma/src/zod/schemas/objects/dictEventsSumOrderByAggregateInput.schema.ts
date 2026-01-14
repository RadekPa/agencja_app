import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  EventCode: SortOrderSchema.optional()
}).strict();
export const dictEventsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictEventsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsSumOrderByAggregateInput>;
export const dictEventsSumOrderByAggregateInputObjectZodSchema = makeSchema();
