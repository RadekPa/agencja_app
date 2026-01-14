import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CountryID: SortOrderSchema.optional(),
  Tax: SortOrderSchema.optional()
}).strict();
export const dictCountries_oldAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictCountries_oldAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldAvgOrderByAggregateInput>;
export const dictCountries_oldAvgOrderByAggregateInputObjectZodSchema = makeSchema();
