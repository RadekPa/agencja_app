import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const dictRoyTypeOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.dictRoyTypeOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyTypeOrderByRelationAggregateInput>;
export const dictRoyTypeOrderByRelationAggregateInputObjectZodSchema = makeSchema();
