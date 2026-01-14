import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Name: SortOrderSchema.optional(),
  FileName: SortOrderSchema.optional()
}).strict();
export const dictAgrTemplatesMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictAgrTemplatesMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrTemplatesMinOrderByAggregateInput>;
export const dictAgrTemplatesMinOrderByAggregateInputObjectZodSchema = makeSchema();
