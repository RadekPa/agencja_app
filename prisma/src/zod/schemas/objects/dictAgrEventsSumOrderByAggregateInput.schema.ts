import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AgrEventCode: SortOrderSchema.optional()
}).strict();
export const dictAgrEventsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictAgrEventsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsSumOrderByAggregateInput>;
export const dictAgrEventsSumOrderByAggregateInputObjectZodSchema = makeSchema();
