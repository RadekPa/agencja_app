import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CountryID: SortOrderSchema.optional(),
  CountryDesc: SortOrderSchema.optional(),
  CountryPL: SortOrderSchema.optional(),
  Tax: SortOrderSchema.optional(),
  Code: SortOrderSchema.optional(),
  EU: SortOrderSchema.optional()
}).strict();
export const dictCountriesCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictCountriesCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountriesCountOrderByAggregateInput>;
export const dictCountriesCountOrderByAggregateInputObjectZodSchema = makeSchema();
