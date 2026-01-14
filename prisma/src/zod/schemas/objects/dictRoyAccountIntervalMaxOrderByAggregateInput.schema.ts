import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  RoyAccountIntervalID: SortOrderSchema.optional(),
  RoyAccountIntervalDesc: SortOrderSchema.optional(),
  IntervalAbb: SortOrderSchema.optional()
}).strict();
export const dictRoyAccountIntervalMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalMaxOrderByAggregateInput>;
export const dictRoyAccountIntervalMaxOrderByAggregateInputObjectZodSchema = makeSchema();
