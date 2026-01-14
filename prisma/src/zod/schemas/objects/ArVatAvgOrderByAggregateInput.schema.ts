import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  VatRate: SortOrderSchema.optional()
}).strict();
export const ArVatAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArVatAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArVatAvgOrderByAggregateInput>;
export const ArVatAvgOrderByAggregateInputObjectZodSchema = makeSchema();
