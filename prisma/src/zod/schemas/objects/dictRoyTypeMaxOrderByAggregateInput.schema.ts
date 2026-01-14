import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  RoyTypeID: SortOrderSchema.optional(),
  AgrRightID: SortOrderSchema.optional(),
  RoyTypeDesc: SortOrderSchema.optional()
}).strict();
export const dictRoyTypeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictRoyTypeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyTypeMaxOrderByAggregateInput>;
export const dictRoyTypeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
