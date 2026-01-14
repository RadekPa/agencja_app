import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AdvTypeId: SortOrderSchema.optional(),
  AdvTypeDesc: SortOrderSchema.optional(),
  AdvTypeDescPL: SortOrderSchema.optional()
}).strict();
export const dictAdvTypeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictAdvTypeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTypeMaxOrderByAggregateInput>;
export const dictAdvTypeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
