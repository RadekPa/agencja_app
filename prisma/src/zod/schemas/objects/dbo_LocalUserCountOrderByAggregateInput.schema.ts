import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  passwordHash: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  permissions: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  locale: SortOrderSchema.optional()
}).strict();
export const dbo_LocalUserCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dbo_LocalUserCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dbo_LocalUserCountOrderByAggregateInput>;
export const dbo_LocalUserCountOrderByAggregateInputObjectZodSchema = makeSchema();
