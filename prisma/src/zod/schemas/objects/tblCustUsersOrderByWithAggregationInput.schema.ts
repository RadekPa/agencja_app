import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblCustUsersCountOrderByAggregateInputObjectSchema as tblCustUsersCountOrderByAggregateInputObjectSchema } from './tblCustUsersCountOrderByAggregateInput.schema';
import { tblCustUsersAvgOrderByAggregateInputObjectSchema as tblCustUsersAvgOrderByAggregateInputObjectSchema } from './tblCustUsersAvgOrderByAggregateInput.schema';
import { tblCustUsersMaxOrderByAggregateInputObjectSchema as tblCustUsersMaxOrderByAggregateInputObjectSchema } from './tblCustUsersMaxOrderByAggregateInput.schema';
import { tblCustUsersMinOrderByAggregateInputObjectSchema as tblCustUsersMinOrderByAggregateInputObjectSchema } from './tblCustUsersMinOrderByAggregateInput.schema';
import { tblCustUsersSumOrderByAggregateInputObjectSchema as tblCustUsersSumOrderByAggregateInputObjectSchema } from './tblCustUsersSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  Login: SortOrderSchema.optional(),
  _count: z.lazy(() => tblCustUsersCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblCustUsersAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblCustUsersMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblCustUsersMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblCustUsersSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblCustUsersOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblCustUsersOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersOrderByWithAggregationInput>;
export const tblCustUsersOrderByWithAggregationInputObjectZodSchema = makeSchema();
