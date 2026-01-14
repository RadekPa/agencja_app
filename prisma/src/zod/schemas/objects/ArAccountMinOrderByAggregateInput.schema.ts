import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AccountID: SortOrderSchema.optional(),
  AccountDescription: SortOrderSchema.optional()
}).strict();
export const ArAccountMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArAccountMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArAccountMinOrderByAggregateInput>;
export const ArAccountMinOrderByAggregateInputObjectZodSchema = makeSchema();
