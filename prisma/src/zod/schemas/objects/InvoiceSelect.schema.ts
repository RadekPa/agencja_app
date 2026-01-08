import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerArgsObjectSchema as CustomerArgsObjectSchema } from './CustomerArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  dateIssued: z.boolean().optional(),
  type: z.boolean().optional(),
  clientId: z.boolean().optional(),
  client: z.union([z.boolean(), z.lazy(() => CustomerArgsObjectSchema)]).optional(),
  origCurrency: z.boolean().optional(),
  fvCurrency: z.boolean().optional(),
  graalPerc: z.boolean().optional(),
  vatCode: z.boolean().optional(),
  vatPerc: z.boolean().optional(),
  netAmt: z.boolean().optional(),
  netAmtCurr: z.boolean().optional(),
  vatAmt: z.boolean().optional(),
  xrate: z.boolean().optional(),
  vatAmtCurr: z.boolean().optional(),
  grossAmt: z.boolean().optional(),
  invNr: z.boolean().optional(),
  invAmt: z.boolean().optional(),
  title: z.boolean().optional(),
  isbnNr: z.boolean().optional(),
  payType: z.boolean().optional(),
  invType: z.boolean().optional(),
  fvDescription: z.boolean().optional(),
  bilNr: z.boolean().optional(),
  origFVNr: z.boolean().optional(),
  correctFVNr: z.boolean().optional(),
  creditId: z.boolean().optional(),
  applyId: z.boolean().optional(),
  payDate: z.boolean().optional(),
  enterDate: z.boolean().optional(),
  enterEmployee: z.boolean().optional(),
  status: z.boolean().optional()
}).strict();
export const InvoiceSelectObjectSchema: z.ZodType<Prisma.InvoiceSelect> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceSelect>;
export const InvoiceSelectObjectZodSchema = makeSchema();
