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
export const dictCountries_oldMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictCountries_oldMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldMinOrderByAggregateInput>;
export const dictCountries_oldMinOrderByAggregateInputObjectZodSchema = makeSchema();
