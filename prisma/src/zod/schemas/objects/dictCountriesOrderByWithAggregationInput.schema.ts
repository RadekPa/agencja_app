import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictCountriesCountOrderByAggregateInputObjectSchema as dictCountriesCountOrderByAggregateInputObjectSchema } from './dictCountriesCountOrderByAggregateInput.schema';
import { dictCountriesAvgOrderByAggregateInputObjectSchema as dictCountriesAvgOrderByAggregateInputObjectSchema } from './dictCountriesAvgOrderByAggregateInput.schema';
import { dictCountriesMaxOrderByAggregateInputObjectSchema as dictCountriesMaxOrderByAggregateInputObjectSchema } from './dictCountriesMaxOrderByAggregateInput.schema';
import { dictCountriesMinOrderByAggregateInputObjectSchema as dictCountriesMinOrderByAggregateInputObjectSchema } from './dictCountriesMinOrderByAggregateInput.schema';
import { dictCountriesSumOrderByAggregateInputObjectSchema as dictCountriesSumOrderByAggregateInputObjectSchema } from './dictCountriesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  CountryID: SortOrderSchema.optional(),
  CountryDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CountryPL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Tax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Code: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EU: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => dictCountriesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictCountriesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictCountriesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictCountriesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictCountriesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictCountriesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictCountriesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountriesOrderByWithAggregationInput>;
export const dictCountriesOrderByWithAggregationInputObjectZodSchema = makeSchema();
