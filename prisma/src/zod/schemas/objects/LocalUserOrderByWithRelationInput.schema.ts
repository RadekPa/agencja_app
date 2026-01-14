import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: SortOrderSchema.optional(),
  passwordHash: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  permissions: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  locale: SortOrderSchema.optional()
}).strict();
export const LocalUserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.LocalUserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocalUserOrderByWithRelationInput>;
export const LocalUserOrderByWithRelationInputObjectZodSchema = makeSchema();
