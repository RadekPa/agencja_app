import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  SubmSentTypeID: SortOrderSchema.optional()
}).strict();
export const dictSubmSentTypeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeSumOrderByAggregateInput>;
export const dictSubmSentTypeSumOrderByAggregateInputObjectZodSchema = makeSchema();
