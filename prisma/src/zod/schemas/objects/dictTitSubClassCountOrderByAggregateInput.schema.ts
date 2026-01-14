import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  SubClassCode: SortOrderSchema.optional(),
  ClassCode: SortOrderSchema.optional(),
  SubClassDesc: SortOrderSchema.optional()
}).strict();
export const dictTitSubClassCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictTitSubClassCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassCountOrderByAggregateInput>;
export const dictTitSubClassCountOrderByAggregateInputObjectZodSchema = makeSchema();
