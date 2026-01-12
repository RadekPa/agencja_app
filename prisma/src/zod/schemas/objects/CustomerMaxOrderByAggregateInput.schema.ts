import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  custAbb: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  address: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  postalCode: SortOrderSchema.optional(),
  country: SortOrderSchema.optional(),
  nip: SortOrderSchema.optional(),
  regon: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const CustomerMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CustomerMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerMaxOrderByAggregateInput>;
export const CustomerMaxOrderByAggregateInputObjectZodSchema = makeSchema();
