import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AdvTypeId: SortOrderSchema.optional(),
  AdvTypeDesc: SortOrderSchema.optional(),
  AdvTypeDescPL: SortOrderSchema.optional()
}).strict();
export const dictAdvTypeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictAdvTypeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTypeMinOrderByAggregateInput>;
export const dictAdvTypeMinOrderByAggregateInputObjectZodSchema = makeSchema();
