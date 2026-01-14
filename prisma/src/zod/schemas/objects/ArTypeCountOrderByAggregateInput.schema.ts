import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ArType: SortOrderSchema.optional(),
  ArTypeDescription: SortOrderSchema.optional(),
  ArTypeDescriptionPL: SortOrderSchema.optional()
}).strict();
export const ArTypeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArTypeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTypeCountOrderByAggregateInput>;
export const ArTypeCountOrderByAggregateInputObjectZodSchema = makeSchema();
