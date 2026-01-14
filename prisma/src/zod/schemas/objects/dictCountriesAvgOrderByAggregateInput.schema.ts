import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CountryID: SortOrderSchema.optional(),
  Tax: SortOrderSchema.optional()
}).strict();
export const dictCountriesAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictCountriesAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountriesAvgOrderByAggregateInput>;
export const dictCountriesAvgOrderByAggregateInputObjectZodSchema = makeSchema();
