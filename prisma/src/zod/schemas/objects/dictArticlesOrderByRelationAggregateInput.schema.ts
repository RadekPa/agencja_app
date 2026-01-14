import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const dictArticlesOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.dictArticlesOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesOrderByRelationAggregateInput>;
export const dictArticlesOrderByRelationAggregateInputObjectZodSchema = makeSchema();
