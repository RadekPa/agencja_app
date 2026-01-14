import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CustTypeID: SortOrderSchema.optional()
}).strict();
export const dictCustTypesSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictCustTypesSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesSumOrderByAggregateInput>;
export const dictCustTypesSumOrderByAggregateInputObjectZodSchema = makeSchema();
