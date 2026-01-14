import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  EventCode: SortOrderSchema.optional(),
  EventDesc: SortOrderSchema.optional()
}).strict();
export const dictEventsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictEventsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsCountOrderByAggregateInput>;
export const dictEventsCountOrderByAggregateInputObjectZodSchema = makeSchema();
