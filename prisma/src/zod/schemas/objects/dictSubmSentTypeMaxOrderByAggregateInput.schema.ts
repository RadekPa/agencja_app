import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  SubmSentTypeID: SortOrderSchema.optional(),
  SubmSentType: SortOrderSchema.optional()
}).strict();
export const dictSubmSentTypeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeMaxOrderByAggregateInput>;
export const dictSubmSentTypeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
