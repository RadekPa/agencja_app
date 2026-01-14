import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CopyTypeID: SortOrderSchema.optional()
}).strict();
export const dictCopyTypeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictCopyTypeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeSumOrderByAggregateInput>;
export const dictCopyTypeSumOrderByAggregateInputObjectZodSchema = makeSchema();
