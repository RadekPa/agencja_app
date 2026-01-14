import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CopyTypeID: SortOrderSchema.optional(),
  CopyType: SortOrderSchema.optional()
}).strict();
export const dictCopyTypeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictCopyTypeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeMinOrderByAggregateInput>;
export const dictCopyTypeMinOrderByAggregateInputObjectZodSchema = makeSchema();
