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
export const LocalUserMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LocalUserMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LocalUserMinOrderByAggregateInput>;
export const LocalUserMinOrderByAggregateInputObjectZodSchema = makeSchema();
