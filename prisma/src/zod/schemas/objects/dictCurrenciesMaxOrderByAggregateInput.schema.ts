import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CurrID: SortOrderSchema.optional(),
  CurrDesc: SortOrderSchema.optional()
}).strict();
export const dictCurrenciesMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictCurrenciesMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesMaxOrderByAggregateInput>;
export const dictCurrenciesMaxOrderByAggregateInputObjectZodSchema = makeSchema();
