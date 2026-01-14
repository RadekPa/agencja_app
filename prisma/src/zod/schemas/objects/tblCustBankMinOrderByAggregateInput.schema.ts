import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  BankName: SortOrderSchema.optional(),
  BankAddress: SortOrderSchema.optional(),
  AccountNo: SortOrderSchema.optional(),
  RoutingNo: SortOrderSchema.optional(),
  AccountName: SortOrderSchema.optional()
}).strict();
export const tblCustBankMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblCustBankMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustBankMinOrderByAggregateInput>;
export const tblCustBankMinOrderByAggregateInputObjectZodSchema = makeSchema();
