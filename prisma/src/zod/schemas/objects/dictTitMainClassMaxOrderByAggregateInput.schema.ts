import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ClassCode: SortOrderSchema.optional(),
  ClassDesc: SortOrderSchema.optional()
}).strict();
export const dictTitMainClassMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictTitMainClassMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassMaxOrderByAggregateInput>;
export const dictTitMainClassMaxOrderByAggregateInputObjectZodSchema = makeSchema();
