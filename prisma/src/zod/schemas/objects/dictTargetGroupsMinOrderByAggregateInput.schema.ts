import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TargetGroupID: SortOrderSchema.optional(),
  TargetGroupDesc: SortOrderSchema.optional()
}).strict();
export const dictTargetGroupsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictTargetGroupsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTargetGroupsMinOrderByAggregateInput>;
export const dictTargetGroupsMinOrderByAggregateInputObjectZodSchema = makeSchema();
