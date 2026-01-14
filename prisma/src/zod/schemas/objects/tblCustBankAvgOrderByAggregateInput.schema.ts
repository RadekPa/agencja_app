import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional()
}).strict();
export const tblCustBankAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblCustBankAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustBankAvgOrderByAggregateInput>;
export const tblCustBankAvgOrderByAggregateInputObjectZodSchema = makeSchema();
