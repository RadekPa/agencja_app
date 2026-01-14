import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CountryID: SortOrderSchema.optional(),
  Tax: SortOrderSchema.optional()
}).strict();
export const dictCountries_oldSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictCountries_oldSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldSumOrderByAggregateInput>;
export const dictCountries_oldSumOrderByAggregateInputObjectZodSchema = makeSchema();
