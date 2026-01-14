import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  StateID: SortOrderSchema.optional(),
  CountryID: SortOrderSchema.optional()
}).strict();
export const dictStatesSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictStatesSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesSumOrderByAggregateInput>;
export const dictStatesSumOrderByAggregateInputObjectZodSchema = makeSchema();
