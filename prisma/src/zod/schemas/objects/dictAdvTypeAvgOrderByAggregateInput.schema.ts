import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AdvTypeId: SortOrderSchema.optional()
}).strict();
export const dictAdvTypeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictAdvTypeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTypeAvgOrderByAggregateInput>;
export const dictAdvTypeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
