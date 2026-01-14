import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CurrID: SortOrderSchema.optional(),
  CurrDesc: SortOrderSchema.optional()
}).strict();
export const dictCurrenciesMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictCurrenciesMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesMinOrderByAggregateInput>;
export const dictCurrenciesMinOrderByAggregateInputObjectZodSchema = makeSchema();
