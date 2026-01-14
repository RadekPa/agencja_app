import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  InvNum: z.boolean().optional(),
  InvType: z.boolean().optional(),
  InvDate: z.boolean().optional(),
  BillToId: z.boolean().optional(),
  ClientId: z.boolean().optional(),
  ShipToId: z.boolean().optional(),
  CurrId: z.boolean().optional(),
  TotalInvNET: z.boolean().optional(),
  VATPerc: z.boolean().optional(),
  TermDD: z.boolean().optional(),
  Remarks: z.boolean().optional(),
  Status: z.boolean().optional(),
  SumInWords: z.boolean().optional(),
  Balance: z.boolean().optional(),
  CliRef: z.boolean().optional(),
  Descr: z.boolean().optional(),
  DateDue: z.boolean().optional(),
  UserName: z.boolean().optional(),
  AgentID: z.boolean().optional(),
  TaxCode: z.boolean().optional(),
  TaxValue: z.boolean().optional(),
  TaxInfo: z.boolean().optional(),
  PropID: z.boolean().optional()
}).strict();
export const tblInvoiceSelectObjectSchema: z.ZodType<Prisma.tblInvoiceSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblInvoiceSelect>;
export const tblInvoiceSelectObjectZodSchema = makeSchema();
