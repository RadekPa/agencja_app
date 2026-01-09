import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  fullName: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  middleName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  suffix: SortOrderSchema.optional(),
  penName: SortOrderSchema.optional(),
  userMod: SortOrderSchema.optional(),
  dateMod: SortOrderSchema.optional(),
  remarks: SortOrderSchema.optional()
}).strict();
export const AuthorMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AuthorMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorMinOrderByAggregateInput>;
export const AuthorMinOrderByAggregateInputObjectZodSchema = makeSchema();
