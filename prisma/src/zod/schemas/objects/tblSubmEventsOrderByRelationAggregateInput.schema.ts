import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const tblSubmEventsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.tblSubmEventsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsOrderByRelationAggregateInput>;
export const tblSubmEventsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
