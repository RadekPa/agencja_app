import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CoverFormatID: SortOrderSchema.optional(),
  CoverFormatDesc: SortOrderSchema.optional()
}).strict();
export const dictCoverFormatMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictCoverFormatMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatMaxOrderByAggregateInput>;
export const dictCoverFormatMaxOrderByAggregateInputObjectZodSchema = makeSchema();
