import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblCustBankCountOrderByAggregateInputObjectSchema as tblCustBankCountOrderByAggregateInputObjectSchema } from './tblCustBankCountOrderByAggregateInput.schema';
import { tblCustBankAvgOrderByAggregateInputObjectSchema as tblCustBankAvgOrderByAggregateInputObjectSchema } from './tblCustBankAvgOrderByAggregateInput.schema';
import { tblCustBankMaxOrderByAggregateInputObjectSchema as tblCustBankMaxOrderByAggregateInputObjectSchema } from './tblCustBankMaxOrderByAggregateInput.schema';
import { tblCustBankMinOrderByAggregateInputObjectSchema as tblCustBankMinOrderByAggregateInputObjectSchema } from './tblCustBankMinOrderByAggregateInput.schema';
import { tblCustBankSumOrderByAggregateInputObjectSchema as tblCustBankSumOrderByAggregateInputObjectSchema } from './tblCustBankSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  BankName: SortOrderSchema.optional(),
  BankAddress: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AccountNo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoutingNo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AccountName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblCustBankCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblCustBankAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblCustBankMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblCustBankMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblCustBankSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblCustBankOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblCustBankOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustBankOrderByWithAggregationInput>;
export const tblCustBankOrderByWithAggregationInputObjectZodSchema = makeSchema();
