import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CountryID: SortOrderSchema.optional(),
  Tax: SortOrderSchema.optional()
}).strict();
export const dictCountriesSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictCountriesSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountriesSumOrderByAggregateInput>;
export const dictCountriesSumOrderByAggregateInputObjectZodSchema = makeSchema();
