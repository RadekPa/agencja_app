import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  EventCode: SortOrderSchema.optional(),
  EventDesc: SortOrderSchema.optional()
}).strict();
export const dictEventsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictEventsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsMaxOrderByAggregateInput>;
export const dictEventsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
