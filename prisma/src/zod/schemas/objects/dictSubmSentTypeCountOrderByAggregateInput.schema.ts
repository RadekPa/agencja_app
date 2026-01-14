import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  SubmSentTypeID: SortOrderSchema.optional(),
  SubmSentType: SortOrderSchema.optional()
}).strict();
export const dictSubmSentTypeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeCountOrderByAggregateInput>;
export const dictSubmSentTypeCountOrderByAggregateInputObjectZodSchema = makeSchema();
