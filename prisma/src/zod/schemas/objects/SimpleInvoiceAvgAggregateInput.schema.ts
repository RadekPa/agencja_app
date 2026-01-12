import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  billToId: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  shipToId: z.literal(true).optional(),
  totalInvNET: z.literal(true).optional(),
  vatPerc: z.literal(true).optional(),
  termDD: z.literal(true).optional(),
  balance: z.literal(true).optional(),
  agentID: z.literal(true).optional(),
  taxValue: z.literal(true).optional(),
  propID: z.literal(true).optional()
}).strict();
export const SimpleInvoiceAvgAggregateInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceAvgAggregateInputType>;
export const SimpleInvoiceAvgAggregateInputObjectZodSchema = makeSchema();
