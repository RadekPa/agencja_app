import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  InvNum: SortOrderSchema.optional(),
  InvType: SortOrderSchema.optional(),
  InvDate: SortOrderSchema.optional(),
  BillToId: SortOrderSchema.optional(),
  ClientId: SortOrderSchema.optional(),
  ShipToId: SortOrderSchema.optional(),
  CurrId: SortOrderSchema.optional(),
  TotalInvNET: SortOrderSchema.optional(),
  VATPerc: SortOrderSchema.optional(),
  TermDD: SortOrderSchema.optional(),
  Remarks: SortOrderSchema.optional(),
  Status: SortOrderSchema.optional(),
  SumInWords: SortOrderSchema.optional(),
  Balance: SortOrderSchema.optional(),
  CliRef: SortOrderSchema.optional(),
  Descr: SortOrderSchema.optional(),
  DateDue: SortOrderSchema.optional(),
  UserName: SortOrderSchema.optional(),
  AgentID: SortOrderSchema.optional(),
  TaxCode: SortOrderSchema.optional(),
  TaxValue: SortOrderSchema.optional(),
  TaxInfo: SortOrderSchema.optional(),
  PropID: SortOrderSchema.optional()
}).strict();
export const tblInvoiceMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblInvoiceMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblInvoiceMinOrderByAggregateInput>;
export const tblInvoiceMinOrderByAggregateInputObjectZodSchema = makeSchema();
