import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ArApplyOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ArApplyOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArApplyOrderByRelationAggregateInput>;
export const ArApplyOrderByRelationAggregateInputObjectZodSchema = makeSchema();
