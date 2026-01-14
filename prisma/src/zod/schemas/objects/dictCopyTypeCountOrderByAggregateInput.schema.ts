import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CopyTypeID: SortOrderSchema.optional(),
  CopyType: SortOrderSchema.optional()
}).strict();
export const dictCopyTypeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictCopyTypeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeCountOrderByAggregateInput>;
export const dictCopyTypeCountOrderByAggregateInputObjectZodSchema = makeSchema();
