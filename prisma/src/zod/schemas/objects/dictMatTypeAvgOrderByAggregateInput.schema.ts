import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  MatTypeID: SortOrderSchema.optional()
}).strict();
export const dictMatTypeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictMatTypeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictMatTypeAvgOrderByAggregateInput>;
export const dictMatTypeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
