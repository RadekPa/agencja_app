import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TargetGroupID: SortOrderSchema.optional(),
  TargetGroupDesc: SortOrderSchema.optional()
}).strict();
export const dictTargetGroupsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictTargetGroupsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTargetGroupsCountOrderByAggregateInput>;
export const dictTargetGroupsCountOrderByAggregateInputObjectZodSchema = makeSchema();
