import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CopyTypeID: SortOrderSchema.optional()
}).strict();
export const dictCopyTypeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictCopyTypeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeAvgOrderByAggregateInput>;
export const dictCopyTypeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
