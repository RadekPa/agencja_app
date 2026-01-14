import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TargetGroupID: SortOrderSchema.optional()
}).strict();
export const dictTargetGroupsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictTargetGroupsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTargetGroupsSumOrderByAggregateInput>;
export const dictTargetGroupsSumOrderByAggregateInputObjectZodSchema = makeSchema();
