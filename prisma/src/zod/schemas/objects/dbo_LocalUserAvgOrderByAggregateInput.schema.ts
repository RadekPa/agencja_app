import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const dbo_LocalUserAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dbo_LocalUserAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dbo_LocalUserAvgOrderByAggregateInput>;
export const dbo_LocalUserAvgOrderByAggregateInputObjectZodSchema = makeSchema();
