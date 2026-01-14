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
export const tblCustBankCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblCustBankCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustBankCountOrderByAggregateInput>;
export const tblCustBankCountOrderByAggregateInputObjectZodSchema = makeSchema();
