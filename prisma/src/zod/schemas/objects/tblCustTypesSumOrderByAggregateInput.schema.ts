import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  CustTypeID: SortOrderSchema.optional()
}).strict();
export const tblCustTypesSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblCustTypesSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesSumOrderByAggregateInput>;
export const tblCustTypesSumOrderByAggregateInputObjectZodSchema = makeSchema();
