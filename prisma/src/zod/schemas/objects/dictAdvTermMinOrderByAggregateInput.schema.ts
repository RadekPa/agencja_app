import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AdvTermId: SortOrderSchema.optional(),
  AdvTermDesc: SortOrderSchema.optional(),
  AdvTermPL: SortOrderSchema.optional()
}).strict();
export const dictAdvTermMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictAdvTermMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTermMinOrderByAggregateInput>;
export const dictAdvTermMinOrderByAggregateInputObjectZodSchema = makeSchema();
