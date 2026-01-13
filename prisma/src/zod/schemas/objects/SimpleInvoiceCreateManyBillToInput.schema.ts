import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int(),
  invType: z.string().max(1),
  invDate: z.coerce.date().optional().nullable(),
  clientId: z.number().int().optional().nullable(),
  shipToId: z.number().int().optional().nullable(),
  currId: z.string().max(3).optional().nullable(),
  totalInvNET: z.number().optional().nullable(),
  vatPerc: z.number().int().optional().nullable(),
  termDD: z.number().int().optional().nullable(),
  remarks: z.string().max(255).optional().nullable(),
  status: z.string().max(1).optional().nullable(),
  sumInWords: z.string().max(500).optional().nullable(),
  balance: z.number().optional().nullable(),
  cliRef: z.string().max(50).optional().nullable(),
  descr: z.string().max(200).optional().nullable(),
  dateDue: z.coerce.date().optional().nullable(),
  userName: z.string().max(50).optional().nullable(),
  agentID: z.number().int().optional().nullable(),
  taxCode: z.string().max(1).optional().nullable(),
  taxValue: z.number().optional().nullable(),
  taxInfo: z.string().max(1).optional().nullable(),
  propID: z.number().int().optional().nullable()
}).strict();
export const SimpleInvoiceCreateManyBillToInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceCreateManyBillToInput> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceCreateManyBillToInput>;
export const SimpleInvoiceCreateManyBillToInputObjectZodSchema = makeSchema();
