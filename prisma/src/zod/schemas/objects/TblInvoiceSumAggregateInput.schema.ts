import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  InvNum: z.literal(true).optional(),
  BillToId: z.literal(true).optional(),
  ClientId: z.literal(true).optional(),
  ShipToId: z.literal(true).optional(),
  TotalInvNET: z.literal(true).optional(),
  VATPerc: z.literal(true).optional(),
  TermDD: z.literal(true).optional(),
  Balance: z.literal(true).optional(),
  AgentID: z.literal(true).optional(),
  TaxValue: z.literal(true).optional(),
  PropID: z.literal(true).optional()
}).strict();
export const TblInvoiceSumAggregateInputObjectSchema: z.ZodType<Prisma.TblInvoiceSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblInvoiceSumAggregateInputType>;
export const TblInvoiceSumAggregateInputObjectZodSchema = makeSchema();
