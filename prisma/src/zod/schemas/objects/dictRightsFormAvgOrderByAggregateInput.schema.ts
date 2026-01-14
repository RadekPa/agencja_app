import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  RightFormID: SortOrderSchema.optional()
}).strict();
export const dictRightsFormAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictRightsFormAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRightsFormAvgOrderByAggregateInput>;
export const dictRightsFormAvgOrderByAggregateInputObjectZodSchema = makeSchema();
