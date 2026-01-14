import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  MatTypeID: SortOrderSchema.optional(),
  MatTypeDesc: SortOrderSchema.optional(),
  MatTypeDescPL: SortOrderSchema.optional()
}).strict();
export const dictMatTypeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictMatTypeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictMatTypeMaxOrderByAggregateInput>;
export const dictMatTypeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
