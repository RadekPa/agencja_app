import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  EventCode: SortOrderSchema.optional(),
  EventDesc: SortOrderSchema.optional()
}).strict();
export const dictEventsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictEventsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsMinOrderByAggregateInput>;
export const dictEventsMinOrderByAggregateInputObjectZodSchema = makeSchema();
