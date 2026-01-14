import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AdvTermId: SortOrderSchema.optional(),
  AdvTermDesc: SortOrderSchema.optional(),
  AdvTermPL: SortOrderSchema.optional()
}).strict();
export const dictAdvTermMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictAdvTermMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTermMaxOrderByAggregateInput>;
export const dictAdvTermMaxOrderByAggregateInputObjectZodSchema = makeSchema();
