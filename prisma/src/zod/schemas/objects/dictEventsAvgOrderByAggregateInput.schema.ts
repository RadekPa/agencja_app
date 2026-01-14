import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  EventCode: SortOrderSchema.optional()
}).strict();
export const dictEventsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictEventsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsAvgOrderByAggregateInput>;
export const dictEventsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
