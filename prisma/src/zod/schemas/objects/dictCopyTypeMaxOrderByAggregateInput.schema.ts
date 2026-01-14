import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CopyTypeID: SortOrderSchema.optional(),
  CopyType: SortOrderSchema.optional()
}).strict();
export const dictCopyTypeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictCopyTypeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeMaxOrderByAggregateInput>;
export const dictCopyTypeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
