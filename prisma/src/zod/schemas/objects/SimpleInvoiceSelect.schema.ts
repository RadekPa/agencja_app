import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerArgsObjectSchema as CustomerArgsObjectSchema } from './CustomerArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  invType: z.boolean().optional(),
  invDate: z.boolean().optional(),
  billToId: z.boolean().optional(),
  clientId: z.boolean().optional(),
  client: z.union([z.boolean(), z.lazy(() => CustomerArgsObjectSchema)]).optional(),
  shipToId: z.boolean().optional(),
  currId: z.boolean().optional(),
  totalInvNET: z.boolean().optional(),
  vatPerc: z.boolean().optional(),
  termDD: z.boolean().optional(),
  remarks: z.boolean().optional(),
  status: z.boolean().optional(),
  sumInWords: z.boolean().optional(),
  balance: z.boolean().optional(),
  cliRef: z.boolean().optional(),
  descr: z.boolean().optional(),
  dateDue: z.boolean().optional(),
  userName: z.boolean().optional(),
  agentID: z.boolean().optional(),
  taxCode: z.boolean().optional(),
  taxValue: z.boolean().optional(),
  taxInfo: z.boolean().optional(),
  propID: z.boolean().optional()
}).strict();
export const SimpleInvoiceSelectObjectSchema: z.ZodType<Prisma.SimpleInvoiceSelect> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceSelect>;
export const SimpleInvoiceSelectObjectZodSchema = makeSchema();
