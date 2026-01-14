import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ArTransferDetailOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ArTransferDetailOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailOrderByRelationAggregateInput>;
export const ArTransferDetailOrderByRelationAggregateInputObjectZodSchema = makeSchema();
