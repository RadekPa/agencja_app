import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PayTypeID: SortOrderSchema.optional()
}).strict();
export const lkpPayTypeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.lkpPayTypeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.lkpPayTypeAvgOrderByAggregateInput>;
export const lkpPayTypeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
