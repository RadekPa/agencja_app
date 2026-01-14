import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PayTypeID: SortOrderSchema.optional()
}).strict();
export const lkpPayTypeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.lkpPayTypeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.lkpPayTypeSumOrderByAggregateInput>;
export const lkpPayTypeSumOrderByAggregateInputObjectZodSchema = makeSchema();
