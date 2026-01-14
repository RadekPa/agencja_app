import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  Login: SortOrderSchema.optional()
}).strict();
export const tblCustUsersCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblCustUsersCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersCountOrderByAggregateInput>;
export const tblCustUsersCountOrderByAggregateInputObjectZodSchema = makeSchema();
