import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  InvNum: z.number().int(),
  InvType: z.string().max(1),
  InvDate: z.coerce.date().optional().nullable(),
  BillToId: z.number().int(),
  ClientId: z.number().int().optional().nullable(),
  ShipToId: z.number().int().optional().nullable(),
  CurrId: z.string().max(3).optional().nullable(),
  TotalInvNET: z.number().optional().nullable(),
  VATPerc: z.number().int().optional().nullable(),
  TermDD: z.number().int().optional().nullable(),
  Remarks: z.string().max(255).optional().nullable(),
  Status: z.string().max(1).optional().nullable(),
  SumInWords: z.string().max(500).optional().nullable(),
  Balance: z.number().optional().nullable(),
  CliRef: z.string().max(50).optional().nullable(),
  Descr: z.string().max(200).optional().nullable(),
  DateDue: z.coerce.date().optional().nullable(),
  UserName: z.string().max(50).optional().nullable(),
  AgentID: z.number().int().optional().nullable(),
  TaxCode: z.string().max(1).optional().nullable(),
  TaxValue: z.number().optional().nullable(),
  TaxInfo: z.string().max(1).optional().nullable(),
  PropID: z.number().int().optional().nullable()
}).strict();
export const tblInvoiceCreateManyInputObjectSchema: z.ZodType<Prisma.tblInvoiceCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblInvoiceCreateManyInput>;
export const tblInvoiceCreateManyInputObjectZodSchema = makeSchema();
