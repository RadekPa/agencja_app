import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const tblPubISBNOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.tblPubISBNOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNOrderByRelationAggregateInput>;
export const tblPubISBNOrderByRelationAggregateInputObjectZodSchema = makeSchema();
