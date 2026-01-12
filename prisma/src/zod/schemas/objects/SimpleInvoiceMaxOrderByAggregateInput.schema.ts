import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  invType: SortOrderSchema.optional(),
  invDate: SortOrderSchema.optional(),
  billToId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  shipToId: SortOrderSchema.optional(),
  currId: SortOrderSchema.optional(),
  totalInvNET: SortOrderSchema.optional(),
  vatPerc: SortOrderSchema.optional(),
  termDD: SortOrderSchema.optional(),
  remarks: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  sumInWords: SortOrderSchema.optional(),
  balance: SortOrderSchema.optional(),
  cliRef: SortOrderSchema.optional(),
  descr: SortOrderSchema.optional(),
  dateDue: SortOrderSchema.optional(),
  userName: SortOrderSchema.optional(),
  agentID: SortOrderSchema.optional(),
  taxCode: SortOrderSchema.optional(),
  taxValue: SortOrderSchema.optional(),
  taxInfo: SortOrderSchema.optional(),
  propID: SortOrderSchema.optional()
}).strict();
export const SimpleInvoiceMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceMaxOrderByAggregateInput>;
export const SimpleInvoiceMaxOrderByAggregateInputObjectZodSchema = makeSchema();
