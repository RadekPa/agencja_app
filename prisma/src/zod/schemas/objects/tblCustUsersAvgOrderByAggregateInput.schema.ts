import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional()
}).strict();
export const tblCustUsersAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblCustUsersAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersAvgOrderByAggregateInput>;
export const tblCustUsersAvgOrderByAggregateInputObjectZodSchema = makeSchema();
