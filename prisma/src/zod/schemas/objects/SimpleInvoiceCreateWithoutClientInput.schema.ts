import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateNestedOneWithoutSimpleInvoicesAsBillToInputObjectSchema as CustomerCreateNestedOneWithoutSimpleInvoicesAsBillToInputObjectSchema } from './CustomerCreateNestedOneWithoutSimpleInvoicesAsBillToInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  invType: z.string().max(1),
  invDate: z.coerce.date().optional().nullable(),
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
  propID: z.number().int().optional().nullable(),
  billTo: z.lazy(() => CustomerCreateNestedOneWithoutSimpleInvoicesAsBillToInputObjectSchema)
}).strict();
export const SimpleInvoiceCreateWithoutClientInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceCreateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceCreateWithoutClientInput>;
export const SimpleInvoiceCreateWithoutClientInputObjectZodSchema = makeSchema();
