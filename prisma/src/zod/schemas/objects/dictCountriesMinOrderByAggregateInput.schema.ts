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
export const dictCountriesMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictCountriesMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountriesMinOrderByAggregateInput>;
export const dictCountriesMinOrderByAggregateInputObjectZodSchema = makeSchema();
