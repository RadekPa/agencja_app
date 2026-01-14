import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  StateID: SortOrderSchema.optional(),
  CountryID: SortOrderSchema.optional()
}).strict();
export const dictStatesAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictStatesAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesAvgOrderByAggregateInput>;
export const dictStatesAvgOrderByAggregateInputObjectZodSchema = makeSchema();
