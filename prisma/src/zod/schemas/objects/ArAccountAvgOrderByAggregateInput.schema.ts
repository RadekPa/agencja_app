import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AccountID: SortOrderSchema.optional()
}).strict();
export const ArAccountAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArAccountAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArAccountAvgOrderByAggregateInput>;
export const ArAccountAvgOrderByAggregateInputObjectZodSchema = makeSchema();
