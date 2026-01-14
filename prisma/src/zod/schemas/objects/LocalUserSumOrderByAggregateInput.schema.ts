import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const LocalUserSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LocalUserSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LocalUserSumOrderByAggregateInput>;
export const LocalUserSumOrderByAggregateInputObjectZodSchema = makeSchema();
