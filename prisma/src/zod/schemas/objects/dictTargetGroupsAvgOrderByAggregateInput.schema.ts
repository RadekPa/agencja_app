import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TargetGroupID: SortOrderSchema.optional()
}).strict();
export const dictTargetGroupsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictTargetGroupsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTargetGroupsAvgOrderByAggregateInput>;
export const dictTargetGroupsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
