import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PersonID: SortOrderSchema.optional()
}).strict();
export const tblUsersAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblUsersAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersAvgOrderByAggregateInput>;
export const tblUsersAvgOrderByAggregateInputObjectZodSchema = makeSchema();
