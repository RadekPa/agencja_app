import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  VatRate: SortOrderSchema.optional()
}).strict();
export const ArVatSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArVatSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArVatSumOrderByAggregateInput>;
export const ArVatSumOrderByAggregateInputObjectZodSchema = makeSchema();
