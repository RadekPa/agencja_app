import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  country: SortOrderSchema.optional()
}).strict();
export const CustomerSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CustomerSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSumOrderByAggregateInput>;
export const CustomerSumOrderByAggregateInputObjectZodSchema = makeSchema();
