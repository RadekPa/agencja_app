import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  RoyAccountIntervalID: SortOrderSchema.optional(),
  RoyAccountIntervalDesc: SortOrderSchema.optional(),
  IntervalAbb: SortOrderSchema.optional()
}).strict();
export const dictRoyAccountIntervalMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalMinOrderByAggregateInput>;
export const dictRoyAccountIntervalMinOrderByAggregateInputObjectZodSchema = makeSchema();
