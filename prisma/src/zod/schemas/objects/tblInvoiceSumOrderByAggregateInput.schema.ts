import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  InvNum: SortOrderSchema.optional(),
  BillToId: SortOrderSchema.optional(),
  ClientId: SortOrderSchema.optional(),
  ShipToId: SortOrderSchema.optional(),
  TotalInvNET: SortOrderSchema.optional(),
  VATPerc: SortOrderSchema.optional(),
  TermDD: SortOrderSchema.optional(),
  Balance: SortOrderSchema.optional(),
  AgentID: SortOrderSchema.optional(),
  TaxValue: SortOrderSchema.optional(),
  PropID: SortOrderSchema.optional()
}).strict();
export const tblInvoiceSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblInvoiceSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblInvoiceSumOrderByAggregateInput>;
export const tblInvoiceSumOrderByAggregateInputObjectZodSchema = makeSchema();
