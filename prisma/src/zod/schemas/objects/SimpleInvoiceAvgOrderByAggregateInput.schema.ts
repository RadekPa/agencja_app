import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  billToId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  shipToId: SortOrderSchema.optional(),
  totalInvNET: SortOrderSchema.optional(),
  vatPerc: SortOrderSchema.optional(),
  termDD: SortOrderSchema.optional(),
  balance: SortOrderSchema.optional(),
  agentID: SortOrderSchema.optional(),
  taxValue: SortOrderSchema.optional(),
  propID: SortOrderSchema.optional()
}).strict();
export const SimpleInvoiceAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceAvgOrderByAggregateInput>;
export const SimpleInvoiceAvgOrderByAggregateInputObjectZodSchema = makeSchema();
