import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  RoyAccountIntervalID: SortOrderSchema.optional()
}).strict();
export const dictRoyAccountIntervalSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalSumOrderByAggregateInput>;
export const dictRoyAccountIntervalSumOrderByAggregateInputObjectZodSchema = makeSchema();
