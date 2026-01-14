import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const tblCustomersOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.tblCustomersOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersOrderByRelationAggregateInput>;
export const tblCustomersOrderByRelationAggregateInputObjectZodSchema = makeSchema();
