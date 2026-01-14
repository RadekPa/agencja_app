import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional()
}).strict();
export const tblCustUsersSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblCustUsersSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersSumOrderByAggregateInput>;
export const tblCustUsersSumOrderByAggregateInputObjectZodSchema = makeSchema();
