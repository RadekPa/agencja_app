import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AdvTypeId: SortOrderSchema.optional()
}).strict();
export const dictAdvTypeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictAdvTypeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTypeSumOrderByAggregateInput>;
export const dictAdvTypeSumOrderByAggregateInputObjectZodSchema = makeSchema();
