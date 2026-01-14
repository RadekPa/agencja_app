import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  SubClassCode: SortOrderSchema.optional(),
  ClassCode: SortOrderSchema.optional(),
  SubClassDesc: SortOrderSchema.optional()
}).strict();
export const dictTitSubClassMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictTitSubClassMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassMinOrderByAggregateInput>;
export const dictTitSubClassMinOrderByAggregateInputObjectZodSchema = makeSchema();
