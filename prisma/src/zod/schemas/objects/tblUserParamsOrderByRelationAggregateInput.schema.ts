import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const tblUserParamsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.tblUserParamsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsOrderByRelationAggregateInput>;
export const tblUserParamsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
