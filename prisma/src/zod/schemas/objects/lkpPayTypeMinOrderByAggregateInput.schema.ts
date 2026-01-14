import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PayTypeID: SortOrderSchema.optional(),
  Description: SortOrderSchema.optional(),
  DescriptionPL: SortOrderSchema.optional()
}).strict();
export const lkpPayTypeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.lkpPayTypeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.lkpPayTypeMinOrderByAggregateInput>;
export const lkpPayTypeMinOrderByAggregateInputObjectZodSchema = makeSchema();
