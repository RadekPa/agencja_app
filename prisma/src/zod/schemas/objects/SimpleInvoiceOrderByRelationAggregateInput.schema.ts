import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const SimpleInvoiceOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceOrderByRelationAggregateInput>;
export const SimpleInvoiceOrderByRelationAggregateInputObjectZodSchema = makeSchema();
