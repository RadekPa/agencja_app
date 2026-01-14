import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const dbo_LocalUserSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dbo_LocalUserSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dbo_LocalUserSumOrderByAggregateInput>;
export const dbo_LocalUserSumOrderByAggregateInputObjectZodSchema = makeSchema();
