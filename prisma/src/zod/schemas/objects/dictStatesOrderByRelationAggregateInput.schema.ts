import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const dictStatesOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.dictStatesOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesOrderByRelationAggregateInput>;
export const dictStatesOrderByRelationAggregateInputObjectZodSchema = makeSchema();
