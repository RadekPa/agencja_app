import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  SubmSentTypeID: SortOrderSchema.optional()
}).strict();
export const dictSubmSentTypeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeAvgOrderByAggregateInput>;
export const dictSubmSentTypeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
