import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const tblPubLocalOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.tblPubLocalOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubLocalOrderByRelationAggregateInput>;
export const tblPubLocalOrderByRelationAggregateInputObjectZodSchema = makeSchema();
