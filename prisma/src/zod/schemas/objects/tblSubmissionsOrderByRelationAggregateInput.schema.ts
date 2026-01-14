import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const tblSubmissionsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.tblSubmissionsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsOrderByRelationAggregateInput>;
export const tblSubmissionsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
