import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CurrDate: SortOrderSchema.optional(),
  CurrID: SortOrderSchema.optional(),
  XRate: SortOrderSchema.optional()
}).strict();
export const dictXRatesCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictXRatesCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRatesCountOrderByAggregateInput>;
export const dictXRatesCountOrderByAggregateInputObjectZodSchema = makeSchema();
