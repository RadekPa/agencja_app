import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  Login: SortOrderSchema.optional()
}).strict();
export const tblCustUsersMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblCustUsersMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersMinOrderByAggregateInput>;
export const tblCustUsersMinOrderByAggregateInputObjectZodSchema = makeSchema();
