import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ExcludeReasonID: SortOrderSchema.optional()
}).strict();
export const dictMissRoyExcludeReasonAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonAvgOrderByAggregateInput>;
export const dictMissRoyExcludeReasonAvgOrderByAggregateInputObjectZodSchema = makeSchema();
