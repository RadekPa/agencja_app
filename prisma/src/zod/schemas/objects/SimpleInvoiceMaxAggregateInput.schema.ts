import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  invType: z.literal(true).optional(),
  invDate: z.literal(true).optional(),
  billToId: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  shipToId: z.literal(true).optional(),
  currId: z.literal(true).optional(),
  totalInvNET: z.literal(true).optional(),
  vatPerc: z.literal(true).optional(),
  termDD: z.literal(true).optional(),
  remarks: z.literal(true).optional(),
  status: z.literal(true).optional(),
  sumInWords: z.literal(true).optional(),
  balance: z.literal(true).optional(),
  cliRef: z.literal(true).optional(),
  descr: z.literal(true).optional(),
  dateDue: z.literal(true).optional(),
  userName: z.literal(true).optional(),
  agentID: z.literal(true).optional(),
  taxCode: z.literal(true).optional(),
  taxValue: z.literal(true).optional(),
  taxInfo: z.literal(true).optional(),
  propID: z.literal(true).optional()
}).strict();
export const SimpleInvoiceMaxAggregateInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceMaxAggregateInputType>;
export const SimpleInvoiceMaxAggregateInputObjectZodSchema = makeSchema();
