import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  InvNum: z.literal(true).optional(),
  InvType: z.literal(true).optional(),
  InvDate: z.literal(true).optional(),
  BillToId: z.literal(true).optional(),
  ClientId: z.literal(true).optional(),
  ShipToId: z.literal(true).optional(),
  CurrId: z.literal(true).optional(),
  TotalInvNET: z.literal(true).optional(),
  VATPerc: z.literal(true).optional(),
  TermDD: z.literal(true).optional(),
  Remarks: z.literal(true).optional(),
  Status: z.literal(true).optional(),
  SumInWords: z.literal(true).optional(),
  Balance: z.literal(true).optional(),
  CliRef: z.literal(true).optional(),
  Descr: z.literal(true).optional(),
  DateDue: z.literal(true).optional(),
  UserName: z.literal(true).optional(),
  AgentID: z.literal(true).optional(),
  TaxCode: z.literal(true).optional(),
  TaxValue: z.literal(true).optional(),
  TaxInfo: z.literal(true).optional(),
  PropID: z.literal(true).optional()
}).strict();
export const TblInvoiceMinAggregateInputObjectSchema: z.ZodType<Prisma.TblInvoiceMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblInvoiceMinAggregateInputType>;
export const TblInvoiceMinAggregateInputObjectZodSchema = makeSchema();
