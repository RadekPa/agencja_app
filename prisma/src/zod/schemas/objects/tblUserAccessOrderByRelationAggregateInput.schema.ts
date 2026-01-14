import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const tblUserAccessOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.tblUserAccessOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessOrderByRelationAggregateInput>;
export const tblUserAccessOrderByRelationAggregateInputObjectZodSchema = makeSchema();
