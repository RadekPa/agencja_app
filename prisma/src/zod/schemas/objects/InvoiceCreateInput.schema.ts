import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateNestedOneWithoutInvoicesInputObjectSchema as CustomerCreateNestedOneWithoutInvoicesInputObjectSchema } from './CustomerCreateNestedOneWithoutInvoicesInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  date: z.coerce.date(),
  dateIssued: z.coerce.date().optional().nullable(),
  type: z.number().int().optional().nullable(),
  origCurrency: z.string().optional().nullable(),
  fvCurrency: z.string().optional().nullable(),
  graalPerc: z.number().optional().nullable(),
  vatCode: z.string().optional().nullable(),
  vatPerc: z.number().optional().nullable(),
  netAmt: z.number().optional().nullable(),
  netAmtCurr: z.number().optional().nullable(),
  vatAmt: z.number().optional().nullable(),
  xrate: z.number().optional().nullable(),
  vatAmtCurr: z.number().optional().nullable(),
  grossAmt: z.number().optional().nullable(),
  invNr: z.number().int().optional().nullable(),
  invAmt: z.number().optional().nullable(),
  title: z.string().optional().nullable(),
  isbnNr: z.string().optional().nullable(),
  payType: z.string().optional().nullable(),
  invType: z.string().optional().nullable(),
  fvDescription: z.string().optional().nullable(),
  bilNr: z.number().int().optional().nullable(),
  origFVNr: z.number().int().optional().nullable(),
  correctFVNr: z.number().int().optional().nullable(),
  creditId: z.number().int().optional().nullable(),
  applyId: z.number().int().optional().nullable(),
  payDate: z.coerce.date().optional().nullable(),
  enterDate: z.coerce.date().optional().nullable(),
  enterEmployee: z.string().max(10).optional().nullable(),
  status: z.string().max(10).optional().nullable(),
  client: z.lazy(() => CustomerCreateNestedOneWithoutInvoicesInputObjectSchema).optional()
}).strict();
export const InvoiceCreateInputObjectSchema: z.ZodType<Prisma.InvoiceCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceCreateInput>;
export const InvoiceCreateInputObjectZodSchema = makeSchema();
