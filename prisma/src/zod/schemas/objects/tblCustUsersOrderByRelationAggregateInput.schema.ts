import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const tblCustUsersOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.tblCustUsersOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersOrderByRelationAggregateInput>;
export const tblCustUsersOrderByRelationAggregateInputObjectZodSchema = makeSchema();
