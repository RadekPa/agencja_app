import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictCountries_oldCountOrderByAggregateInputObjectSchema as dictCountries_oldCountOrderByAggregateInputObjectSchema } from './dictCountries_oldCountOrderByAggregateInput.schema';
import { dictCountries_oldAvgOrderByAggregateInputObjectSchema as dictCountries_oldAvgOrderByAggregateInputObjectSchema } from './dictCountries_oldAvgOrderByAggregateInput.schema';
import { dictCountries_oldMaxOrderByAggregateInputObjectSchema as dictCountries_oldMaxOrderByAggregateInputObjectSchema } from './dictCountries_oldMaxOrderByAggregateInput.schema';
import { dictCountries_oldMinOrderByAggregateInputObjectSchema as dictCountries_oldMinOrderByAggregateInputObjectSchema } from './dictCountries_oldMinOrderByAggregateInput.schema';
import { dictCountries_oldSumOrderByAggregateInputObjectSchema as dictCountries_oldSumOrderByAggregateInputObjectSchema } from './dictCountries_oldSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  CountryID: SortOrderSchema.optional(),
  CountryDesc: SortOrderSchema.optional(),
  CountryPL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Tax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Code: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EU: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => dictCountries_oldCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictCountries_oldAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictCountries_oldMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictCountries_oldMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictCountries_oldSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictCountries_oldOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictCountries_oldOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldOrderByWithAggregationInput>;
export const dictCountries_oldOrderByWithAggregationInputObjectZodSchema = makeSchema();
