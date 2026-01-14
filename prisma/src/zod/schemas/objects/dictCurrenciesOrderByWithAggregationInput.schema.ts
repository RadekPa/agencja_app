import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { dictCurrenciesCountOrderByAggregateInputObjectSchema as dictCurrenciesCountOrderByAggregateInputObjectSchema } from './dictCurrenciesCountOrderByAggregateInput.schema';
import { dictCurrenciesMaxOrderByAggregateInputObjectSchema as dictCurrenciesMaxOrderByAggregateInputObjectSchema } from './dictCurrenciesMaxOrderByAggregateInput.schema';
import { dictCurrenciesMinOrderByAggregateInputObjectSchema as dictCurrenciesMinOrderByAggregateInputObjectSchema } from './dictCurrenciesMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  CurrID: SortOrderSchema.optional(),
  CurrDesc: SortOrderSchema.optional(),
  _count: z.lazy(() => dictCurrenciesCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictCurrenciesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictCurrenciesMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictCurrenciesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictCurrenciesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesOrderByWithAggregationInput>;
export const dictCurrenciesOrderByWithAggregationInputObjectZodSchema = makeSchema();
