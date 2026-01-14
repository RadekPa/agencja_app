import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  RoyAccountIntervalID: SortOrderSchema.optional(),
  RoyAccountIntervalDesc: SortOrderSchema.optional(),
  IntervalAbb: SortOrderSchema.optional()
}).strict();
export const dictRoyAccountIntervalCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalCountOrderByAggregateInput>;
export const dictRoyAccountIntervalCountOrderByAggregateInputObjectZodSchema = makeSchema();
