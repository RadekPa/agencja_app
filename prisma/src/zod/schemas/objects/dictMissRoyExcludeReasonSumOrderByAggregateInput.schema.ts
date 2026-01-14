import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ExcludeReasonID: SortOrderSchema.optional()
}).strict();
export const dictMissRoyExcludeReasonSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonSumOrderByAggregateInput>;
export const dictMissRoyExcludeReasonSumOrderByAggregateInputObjectZodSchema = makeSchema();
