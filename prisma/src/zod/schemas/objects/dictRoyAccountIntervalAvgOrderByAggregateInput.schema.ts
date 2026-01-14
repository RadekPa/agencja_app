import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  RoyAccountIntervalID: SortOrderSchema.optional()
}).strict();
export const dictRoyAccountIntervalAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalAvgOrderByAggregateInput>;
export const dictRoyAccountIntervalAvgOrderByAggregateInputObjectZodSchema = makeSchema();
