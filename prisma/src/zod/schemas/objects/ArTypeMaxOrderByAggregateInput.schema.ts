import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ArType: SortOrderSchema.optional(),
  ArTypeDescription: SortOrderSchema.optional(),
  ArTypeDescriptionPL: SortOrderSchema.optional()
}).strict();
export const ArTypeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArTypeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTypeMaxOrderByAggregateInput>;
export const ArTypeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
