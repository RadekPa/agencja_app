import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CoverFormatID: SortOrderSchema.optional()
}).strict();
export const dictCoverFormatAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictCoverFormatAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatAvgOrderByAggregateInput>;
export const dictCoverFormatAvgOrderByAggregateInputObjectZodSchema = makeSchema();
